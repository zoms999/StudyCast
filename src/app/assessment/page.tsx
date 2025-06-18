import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function AssessmentPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 페이지 헤더 */}
          <div className="text-center space-y-4 mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary">
              옥타그노시스 검사
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              과학적으로 검증된 성향 분석 도구로 당신의 진로를 찾아보세요
            </p>
          </div>

          {/* 검사 종류 비교 */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="card">
              <div className="space-y-4">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-primary mb-2">기본형</h3>
                  <p className="text-3xl font-bold text-accent">39,000원</p>
                </div>
                
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 소요시간: 20분</li>
                  <li>• 기본 성향 분석</li>
                  <li>• PDF 리포트 제공</li>
                  <li>• 진로 추천 (3개)</li>
                </ul>
                
                <button className="w-full btn-secondary">
                  선택하기
                </button>
              </div>
            </div>

            <div className="card ring-2 ring-accent">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-accent text-primary px-4 py-1 rounded-full text-sm font-medium">
                  추천
                </span>
              </div>
              
              <div className="space-y-4">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-primary mb-2">심화형</h3>
                  <p className="text-3xl font-bold text-accent">69,000원</p>
                </div>
                
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 소요시간: 40분</li>
                  <li>• 상세 성향 분석</li>
                  <li>• PDF 리포트 제공</li>
                  <li>• 진로 추천 (10개)</li>
                  <li>• AI 맞춤 조언</li>
                  <li>• 학습법 가이드</li>
                </ul>
                
                <button className="w-full btn-primary">
                  선택하기
                </button>
              </div>
            </div>

            <div className="card">
              <div className="space-y-4">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-primary mb-2">프리미엄</h3>
                  <p className="text-3xl font-bold text-accent">129,000원</p>
                </div>
                
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 소요시간: 60분</li>
                  <li>• 종합 성향 분석</li>
                  <li>• PDF 리포트 제공</li>
                  <li>• 진로 추천 (무제한)</li>
                  <li>• AI 맞춤 조언</li>
                  <li>• 학습법 가이드</li>
                  <li>• 전문가 상담 1회</li>
                  <li>• 6개월 추적 관리</li>
                </ul>
                
                <button className="w-full btn-secondary">
                  선택하기
                </button>
              </div>
            </div>
          </div>

          {/* 샘플 리포트 */}
          <div className="bg-gray-50 rounded-3xl p-8 mb-16">
            <div className="text-center space-y-4 mb-8">
              <h2 className="text-2xl font-bold text-primary">
                샘플 리포트 미리보기
              </h2>
              <p className="text-gray-600">
                실제 검사 결과로 제공되는 리포트의 형태를 확인해보세요
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">PDF</span>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  개인별 맞춤 분석 리포트
                </h3>
                <p className="text-gray-600 mb-6">
                  20-30페이지 분량의 상세한 분석 결과를 제공합니다
                </p>
                <button className="btn-primary">
                  샘플 리포트 다운로드
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
} 