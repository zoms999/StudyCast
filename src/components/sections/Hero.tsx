'use client'

import Link from 'next/link'
import { ArrowRight, Play, Star, Users } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-primary-50 to-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 좌측 텍스트 영역 */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-accent-100 text-accent-900 rounded-full text-sm font-medium">
                <Star className="w-4 h-4 mr-2" />
                국내 최고 수준의 진로·진학 컨설팅
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-primary leading-tight">
                옥타그노시스 검사로
                <br />
                <span className="text-accent">AI 맞춤형</span> 진로 설계
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                과학적인 성향 분석과 인공지능 분석을 통해
                <br />
                나만의 최적화된 진로·진학·입시 전략을 제공합니다.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/assessment" className="btn-primary inline-flex items-center justify-center">
                검사 시작하기
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              
              <button className="inline-flex items-center justify-center px-6 py-3 text-primary font-medium border border-primary rounded-xl hover:bg-primary-50 transition-colors">
                <Play className="mr-2 w-5 h-5" />
                소개 영상 보기
              </button>
            </div>

            {/* 통계 */}
            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50,000+</div>
                <div className="text-sm text-gray-600">검사 완료</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">98%</div>
                <div className="text-sm text-gray-600">만족도</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">1,000+</div>
                <div className="text-sm text-gray-600">성공 사례</div>
              </div>
            </div>
          </div>

          {/* 우측 이미지/일러스트 영역 */}
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl p-8 card">
              {/* 검사 미리보기 카드 */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">옥타그노시스 검사</h3>
                    <p className="text-sm text-gray-600">AI 기반 성향 분석</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-sm font-medium text-gray-700 mb-2">성향 분석 진행률</div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-accent h-2 rounded-full w-3/4"></div>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">75% 완료</div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-primary-50 rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-primary">85%</div>
                      <div className="text-xs text-primary-700">창의성</div>
                    </div>
                    <div className="bg-accent-50 rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-accent-900">92%</div>
                      <div className="text-xs text-accent-700">분석력</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 플로팅 요소들 */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  )
} 