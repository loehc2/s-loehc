# Firebase 자동 동기화 설정 가이드

## 1단계: Firebase 프로젝트 생성

1. **Firebase 콘솔 접속**
   - https://console.firebase.google.com 접속
   - Google 계정으로 로그인

2. **프로젝트 추가**
   - "프로젝트 추가" 클릭
   - 프로젝트 이름 입력 (예: `s-loehc-papers`)
   - Google Analytics는 선택사항 (필요 없으면 비활성화 가능)
   - "프로젝트 만들기" 클릭

## 2단계: Realtime Database 설정

1. **Realtime Database 생성**
   - 왼쪽 메뉴에서 "Realtime Database" 클릭
   - "데이터베이스 만들기" 클릭
   - 위치 선택 (가장 가까운 지역 선택, 예: `asia-northeast1`)
   - "테스트 모드로 시작" 선택 (나중에 보안 규칙 설정 가능)
   - "사용 설정" 클릭

2. **데이터베이스 URL 복사**
   - 데이터베이스가 생성되면 상단에 URL이 표시됨
   - 예: `https://your-project-id-default-rtdb.asia-northeast1.firebasedatabase.app`
   - 이 URL을 복사해두세요

## 3단계: 웹 앱 설정

1. **웹 앱 추가**
   - 프로젝트 개요 페이지에서 `</>` (웹) 아이콘 클릭
   - 앱 닉네임 입력 (예: `s-loehc-web`)
   - "앱 등록" 클릭

2. **Firebase 설정 정보 복사**
   - 다음 정보가 표시됩니다:
     ```javascript
     const firebaseConfig = {
       apiKey: "AIza...",
       authDomain: "your-project.firebaseapp.com",
       databaseURL: "https://your-project-id-default-rtdb.asia-northeast1.firebasedatabase.app",
       projectId: "your-project-id",
       storageBucket: "your-project-id.appspot.com",
       messagingSenderId: "123456789",
       appId: "1:123456789:web:abcdef"
     };
     ```
   - 이 정보를 복사해두세요

## 4단계: 보안 규칙 설정 (선택사항)

1. **Realtime Database → 규칙 탭**
2. 다음 규칙으로 변경 (읽기/쓰기 모두 허용):
   ```json
   {
     "rules": {
       ".read": true,
       ".write": true
     }
   }
   ```
   - ⚠️ 주의: 이 규칙은 모든 사람이 읽고 쓸 수 있습니다
   - 나중에 인증을 추가하여 보안을 강화할 수 있습니다

3. "게시" 클릭

## 5단계: 코드에 Firebase 설정 추가

1. `saved.html` 파일을 열고
2. 아래에 있는 "Firebase 설정 섹션"을 찾아서
3. 복사한 `firebaseConfig` 정보를 붙여넣으세요

## 완료!

이제 모든 기기에서 자동으로 동기화됩니다!

---

## 보안 강화 (선택사항)

나중에 인증을 추가하려면:
1. Firebase Authentication 활성화
2. 보안 규칙에 인증 체크 추가
3. 코드에 로그인 기능 추가

현재는 간단하게 모든 사용자가 접근할 수 있도록 설정했습니다.

