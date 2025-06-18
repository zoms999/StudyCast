export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* 로고 및 회사 정보 */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-white to-accent rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-sm">SC</span>
              </div>
              <span className="text-xl font-bold">StudyCast</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              AI와 과학적 검사를 통한<br />
              맞춤형 진로·진학 컨설팅
            </p>
          </div>

          {/* 서비스 링크 */}
          <div>
            <h3 className="font-semibold mb-4">서비스</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/assessment" className="hover:text-accent transition-colors">옥타그노시스 검사</a></li>
              <li><a href="/consulting" className="hover:text-accent transition-colors">1:1 컨설팅</a></li>
              <li><a href="/shop" className="hover:text-accent transition-colors">굿즈몰</a></li>
              <li><a href="/content" className="hover:text-accent transition-colors">콘텐츠</a></li>
            </ul>
          </div>

          {/* 고객지원 */}
          <div>
            <h3 className="font-semibold mb-4">고객지원</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/support" className="hover:text-accent transition-colors">고객센터</a></li>
              <li><a href="/faq" className="hover:text-accent transition-colors">자주묻는질문</a></li>
              <li><a href="/reviews" className="hover:text-accent transition-colors">이용후기</a></li>
              <li><a href="/contact" className="hover:text-accent transition-colors">문의하기</a></li>
            </ul>
          </div>

          {/* 회사 정보 */}
          <div>
            <h3 className="font-semibold mb-4">회사 정보</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/privacy" className="hover:text-accent transition-colors">개인정보처리방침</a></li>
              <li><a href="/terms" className="hover:text-accent transition-colors">이용약관</a></li>
              <li><a href="/about" className="hover:text-accent transition-colors">회사소개</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 StudyCast. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 