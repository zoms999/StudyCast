# StudyCast 개발 가이드라인

## 📝 코딩 컨벤션

### TypeScript
- 모든 컴포넌트에서 TypeScript 엄격 모드 사용
- `any` 타입 사용 금지
- interface 우선 사용, type은 유니온/교차 타입이 필요한 경우만 사용

### 컴포넌트 구조
```typescript
// 1. 'use client' 지시어 (필요한 경우)
'use client'

// 2. imports (외부 라이브러리 → 내부 모듈 순)
import { useState } from 'react'
import Link from 'next/link'
import { Icon } from 'lucide-react'

// 3. 타입 정의
interface ComponentProps {
  title: string
  children: React.ReactNode
}

// 4. 컴포넌트 정의
export default function Component({ title, children }: ComponentProps) {
  // 상태, 이펙트 등
  const [state, setState] = useState(false)
  
  return (
    <div className="component-wrapper">
      {/* JSX */}
    </div>
  )
}
```

### CSS 클래스명 규칙
- Tailwind CSS 유틸리티 클래스 우선 사용
- 커스텀 클래스는 `globals.css`의 `@layer components`에 정의
- 컴포넌트별 스타일은 해당 컴포넌트 파일 내에서 정의

### 파일/폴더 명명 규칙
- 컴포넌트: PascalCase (`Header.tsx`)
- 페이지: kebab-case (`assessment/page.tsx`)
- 유틸리티: camelCase (`utils/formatDate.ts`)
- 상수: UPPER_SNAKE_CASE (`constants/API_ENDPOINTS.ts`)

## 🎨 디자인 시스템 사용법

### 컬러 사용
```tsx
// Primary 색상
<div className="bg-primary text-white" />
<div className="text-primary-700" />

// Accent 색상  
<div className="bg-accent text-primary" />
<div className="border-accent-500" />

// Gray 색상
<div className="bg-gray-50 text-gray-900" />
```

### 공통 컴포넌트 클래스
```tsx
// 카드 스타일
<div className="card" />

// 버튼 스타일
<button className="btn-primary" />
<button className="btn-secondary" />
```

### 반응형 디자인
- Mobile First 접근법
- Breakpoints: `sm:` (640px), `md:` (768px), `lg:` (1024px), `xl:` (1280px)

## 📂 폴더 구조 가이드

```
src/
├── app/                    # Next.js App Router
│   ├── (auth)/            # 라우트 그룹
│   ├── assessment/        # 검사 관련 페이지
│   ├── consulting/        # 컨설팅 관련 페이지
│   └── shop/             # 쇼핑몰 관련 페이지
├── components/
│   ├── ui/               # 기본 UI 컴포넌트
│   ├── layout/           # 레이아웃 컴포넌트
│   ├── sections/         # 페이지 섹션 컴포넌트
│   └── features/         # 기능별 컴포넌트
├── lib/                  # 유틸리티 함수
├── hooks/                # 커스텀 훅
├── types/                # TypeScript 타입 정의
├── constants/            # 상수 정의
└── styles/              # 전역 스타일
```

## 🔄 상태 관리

### Zustand Store 패턴
```typescript
// stores/authStore.ts
import { create } from 'zustand'

interface AuthState {
  user: User | null
  isAuthenticated: boolean
  login: (user: User) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  login: (user) => set({ user, isAuthenticated: true }),
  logout: () => set({ user: null, isAuthenticated: false }),
}))
```

### 서버 상태 관리 (SWR)
```typescript
// hooks/useAssessments.ts
import useSWR from 'swr'
import { fetcher } from '@/lib/api'

export function useAssessments() {
  const { data, error, isLoading } = useSWR('/api/assessments', fetcher)
  
  return {
    assessments: data,
    isLoading,
    isError: error
  }
}
```

## 🌐 API 설계

### 라우트 핸들러 구조
```typescript
// app/api/assessments/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    // 로직 구현
    return NextResponse.json({ data: [] })
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
```

### 에러 처리
- 클라이언트 에러: 400-499 상태 코드
- 서버 에러: 500-599 상태 코드
- 에러 메시지는 한국어로 제공

## 🧪 테스트 가이드라인

### 단위 테스트
- Jest + React Testing Library 사용
- 컴포넌트 렌더링 테스트
- 사용자 상호작용 테스트

### E2E 테스트
- Playwright 또는 Cypress 사용
- 주요 사용자 플로우 테스트

## 📊 성능 최적화

### 이미지 최적화
- Next.js Image 컴포넌트 사용
- WebP 포맷 우선 사용
- 적절한 sizes 속성 설정

### 코드 스플리팅
- 동적 import 활용
- 페이지별 청크 분리

### 메모이제이션
- React.memo, useMemo, useCallback 적절히 사용
- 불필요한 리렌더링 방지

## 🔒 보안 가이드라인

### 환경 변수
- 민감한 정보는 `.env.local`에 저장
- 프론트엔드에서 사용할 변수는 `NEXT_PUBLIC_` 접두사 사용

### 데이터 검증
- 클라이언트와 서버 양쪽에서 데이터 검증
- Zod 스키마 활용

### 인증/인가
- NextAuth.js 또는 custom JWT 구현
- 보안 헤더 설정

## 📋 커밋 컨벤션

```
type(scope): subject

body

footer
```

### Type
- `feat`: 새로운 기능
- `fix`: 버그 수정
- `docs`: 문서 수정
- `style`: 코드 포맷팅
- `refactor`: 코드 리팩토링
- `test`: 테스트 코드
- `chore`: 빌드 프로세스 수정

### 예시
```
feat(auth): 소셜 로그인 기능 추가

Google, Kakao 소셜 로그인 기능을 구현했습니다.
- NextAuth.js를 사용하여 OAuth 연동
- 사용자 정보 저장 및 세션 관리
- 로그인 후 리다이렉트 처리

Closes #123
```

## 🚀 배포 가이드라인

### 환경별 설정
- **Development**: `npm run dev`
- **Staging**: Vercel preview 환경
- **Production**: Vercel production 환경

### 배포 전 체크리스트
- [ ] 린트 에러 없음
- [ ] 타입 체크 통과
- [ ] 테스트 모두 통과
- [ ] 빌드 성공
- [ ] 환경 변수 설정 확인

---

이 가이드라인을 준수하여 일관성 있고 유지보수 가능한 코드를 작성해주세요. 