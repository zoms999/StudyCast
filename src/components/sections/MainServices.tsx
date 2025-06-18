'use client'

import Link from 'next/link'
import { 
  Brain, 
  Users, 
  ShoppingBag, 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  Award 
} from 'lucide-react'

export default function MainServices() {
  const services = [
    {
      title: '옥타그노시스 검사',
      subtitle: 'AI 기반 성향 분석',
      description: '과학적인 검사 도구와 AI 분석을 통해 개인의 성향, 적성, 잠재력을 정확하게 파악합니다.',
      icon: Brain,
      color: 'primary',
      features: [
        '8가지 성향 유형 분석',
        'AI 맞춤형 진로 추천',
        '상세한 PDF 리포트 제공',
        '전문가 해석 서비스'
      ],
      price: '39,000원부터',
      href: '/assessment',
      popular: true
    },
    {
      title: '1:1 컨설팅',
      subtitle: '전문가 맞춤 상담',
      description: '검사 결과를 바탕으로 전문 컨설턴트가 개인별 맞춤형 진로·진학·입시 전략을 제공합니다.',
      icon: Users,
      color: 'accent',
      features: [
        '대면/비대면 상담 가능',
        '분야별 전문 컨설턴트',
        '사전 AI 상담 챗봇',
        '캘린더 예약 시스템'
      ],
      price: '150,000원부터',
      href: '/consulting',
      popular: false
    },
    {
      title: '굿즈몰 & 구독',
      subtitle: '학습 도구 및 정기 서비스',
      description: '성향별 맞춤 학습 플래너, 가이드북, 정기 구독 패키지로 지속적인 성장을 지원합니다.',
      icon: ShoppingBag,
      color: 'gray',
      features: [
        '성향별 맞춤 굿즈',
        '월/분기 구독 패키지',
        '학습 플래너 & 가이드북',
        '정기 콘텐츠 업데이트'
      ],
      price: '19,000원부터',
      href: '/shop',
      popular: false
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 섹션 헤더 */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary">
            나에게 맞는 서비스 선택하기
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            검사부터 컨설팅까지, 체계적인 진로 설계 프로세스로 당신의 미래를 함께 그려갑니다.
          </p>
        </div>

        {/* 서비스 카드들 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            const isPopular = service.popular

            return (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 p-8 group ${
                  isPopular ? 'ring-2 ring-accent scale-105' : ''
                }`}
              >
                {/* 인기 배지 */}
                {isPopular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-accent text-primary px-4 py-1 rounded-full text-sm font-medium">
                      인기
                    </div>
                  </div>
                )}

                <div className="space-y-6">
                  {/* 아이콘 및 제목 */}
                  <div className="space-y-4">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                      service.color === 'primary' ? 'bg-primary-100' :
                      service.color === 'accent' ? 'bg-accent-100' :
                      'bg-gray-100'
                    }`}>
                      <IconComponent className={`w-8 h-8 ${
                        service.color === 'primary' ? 'text-primary' :
                        service.color === 'accent' ? 'text-accent-700' :
                        'text-gray-600'
                      }`} />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-600 font-medium">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* 설명 */}
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* 특징 리스트 */}
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* 가격 및 CTA */}
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-primary">
                        {service.price}
                      </span>
                      <div className="flex items-center space-x-1 text-sm text-gray-500">
                        <Clock className="w-4 h-4" />
                        <span>즉시 이용</span>
                      </div>
                    </div>

                    <Link
                      href={service.href}
                      className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-xl font-medium transition-all group-hover:scale-105 ${
                        isPopular 
                          ? 'bg-accent text-primary hover:bg-accent-600' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      시작하기
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* 하단 안내 */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-sm">
            <Award className="w-5 h-5 text-accent" />
            <span className="text-gray-700 font-medium">
              전체 서비스 이용 시 최대 30% 할인 혜택
            </span>
          </div>
        </div>
      </div>
    </section>
  )
} 