import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function ShopPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary">
              굿즈몰 & 구독 서비스
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              성향별 맞춤 학습 도구와 정기 구독으로 지속적인 성장을 지원합니다
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
} 