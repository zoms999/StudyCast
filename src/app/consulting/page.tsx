import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function ConsultingPage() {
  const consultants = [
    {
      name: '김진로',
      specialty: '진로 설계',
      experience: '15년',
      description: '청소년 진로 상담 전문가로 다양한 성향의 학생들과 진로 설계 경험이 풍부합니다.',
      image: '/consultants/kim.jpg',
      rating: 4.9,
      sessions: 1200
    },
    {
      name: '이진학',
      specialty: '입시 전략',
      experience: '12년',
      description: '대학 입시 전문가로 수시, 정시 전략 수립 및 진학 상담 경험이 많습니다.',
      image: '/consultants/lee.jpg',
      rating: 4.8,
      sessions: 980
    },
    {
      name: '박취업',
      specialty: '직무 설계',
      experience: '10년',
      description: '기업 인사 출신으로 직무 분석 및 취업 전략 수립에 전문성을 가지고 있습니다.',
      image: '/consultants/park.jpg',
      rating: 4.9,
      sessions: 750
    }
  ]

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 페이지 헤더 */}
          <div className="text-center space-y-4 mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary">
              1:1 전문가 컨설팅
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              검사 결과를 바탕으로 전문 컨설턴트가 맞춤형 상담을 제공합니다
            </p>
          </div>

          {/* 컨설팅 유형 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="card text-center">
              <h3 className="text-lg font-semibold text-primary mb-2">학습 컨설팅</h3>
              <p className="text-gray-600 text-sm mb-4">효과적인 학습법과 공부 전략</p>
              <p className="text-xl font-bold text-accent">120,000원</p>
            </div>
            
            <div className="card text-center">
              <h3 className="text-lg font-semibold text-primary mb-2">진로 컨설팅</h3>
              <p className="text-gray-600 text-sm mb-4">적성에 맞는 진로 탐색과 설계</p>
              <p className="text-xl font-bold text-accent">150,000원</p>
            </div>
            
            <div className="card text-center">
              <h3 className="text-lg font-semibold text-primary mb-2">진학 컨설팅</h3>
              <p className="text-gray-600 text-sm mb-4">대학 입시 전략과 준비 방법</p>
              <p className="text-xl font-bold text-accent">180,000원</p>
            </div>
            
            <div className="card text-center">
              <h3 className="text-lg font-semibold text-primary mb-2">직무 컨설팅</h3>
              <p className="text-gray-600 text-sm mb-4">취업 준비와 직무 적합성 분석</p>
              <p className="text-xl font-bold text-accent">200,000원</p>
            </div>
          </div>

          {/* 전문가 소개 */}
          <div className="space-y-8 mb-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-primary mb-4">
                전문 컨설턴트
              </h2>
              <p className="text-gray-600">
                각 분야의 전문성을 가진 컨설턴트들이 여러분을 기다립니다
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {consultants.map((consultant, index) => (
                <div key={index} className="card">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg">
                          {consultant.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-primary">
                          {consultant.name}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {consultant.specialty} • 경력 {consultant.experience}
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {consultant.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2">
                        <span className="text-yellow-500">★</span>
                        <span className="font-medium">{consultant.rating}</span>
                      </div>
                      <span className="text-gray-500">
                        {consultant.sessions}회 상담
                      </span>
                    </div>
                    
                    <button className="w-full btn-primary">
                      예약하기
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 예약 프로세스 */}
          <div className="bg-gray-50 rounded-3xl p-8">
            <div className="text-center space-y-4 mb-8">
              <h2 className="text-2xl font-bold text-primary">
                간편한 예약 프로세스
              </h2>
              <p className="text-gray-600">
                4단계만으로 전문가 상담을 예약할 수 있습니다
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                  1
                </div>
                <h3 className="font-semibold text-primary mb-2">컨설턴트 선택</h3>
                <p className="text-sm text-gray-600">전문 분야와 경력을 확인하고 선택</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                  2
                </div>
                <h3 className="font-semibold text-primary mb-2">날짜 및 시간 선택</h3>
                <p className="text-sm text-gray-600">캘린더에서 편리한 시간 선택</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                  3
                </div>
                <h3 className="font-semibold text-primary mb-2">상담 내용 입력</h3>
                <p className="text-sm text-gray-600">궁금한 점과 상담 목적 작성</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                  4
                </div>
                <h3 className="font-semibold text-primary mb-2">결제 및 확정</h3>
                <p className="text-sm text-gray-600">결제 완료 후 상담 일정 확정</p>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <button className="btn-primary px-8">
                지금 예약하기
              </button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
} 