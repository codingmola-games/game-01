# 배포 가이드 — Cloudflare Pages

**목표:** `index.html`을 퍼블릭 URL로 즉시 배포. 빌드 없음. 무료.

## 옵션 A — GitHub 연결 (권장, 자동 배포)

1. 새 GitHub **org** 생성 (name: `codingmola`) — 개인 계정 `HanjuJo` 직접 사용 금지 (익명성 규칙)
2. 저장소 생성 (org: `codingmola`, name: `game-01`, public)
3. 로컬에서 git 초기화 (첫 push 전 `.gitignore` 존재 확인!):
   ```bash
   cd ~/codingmola-games/game-01
   test -f .gitignore || (echo ".gitignore 없음 — 중단" && exit 1)
   git init
   git add .
   git status   # 시크릿/대용량 파일 없나 눈으로 한 번 더
   git commit -m "week 0: scaffold [AI]"
   git branch -M main
   git remote add origin git@github.com:codingmola/game-01.git
   git push -u origin main
   ```
3. https://dash.cloudflare.com → **Workers & Pages → Create → Pages → Connect to Git**
4. 저장소 선택 → Build command: (비움) / Output directory: `/`
5. **Save and Deploy** → `<project>.pages.dev` URL 획득
6. 커스텀 도메인은 나중에 (codingmola.com 서브 또는 .games)

## 옵션 B — Wrangler CLI (즉시 배포, Git 없이)

```bash
npm i -g wrangler
cd ~/codingmola-games/game-01
wrangler pages deploy . --project-name=codingmola-game-01
```

첫 실행 시 Cloudflare 로그인 팝업 뜸. 배포 완료되면 URL 프린트.

## 옵션 C — 최소 테스트 (로컬만)

```bash
cd ~/codingmola-games/game-01
python3 -m http.server 8000
# http://localhost:8000 확인
```

## 체크리스트 (Week 0 완료 조건)

- [ ] `.gitignore` 존재 확인 후 첫 push 완료
- [ ] GitHub org = `codingmola` (실명 org 사용 X)
- [ ] 퍼블릭 URL에서 `index.html` 열림
- [ ] `vendor/three.module.js` 로컬 로딩 확인 (네트워크 탭에서 jsdelivr 호출 없음)
- [ ] 모바일 사파리/크롬에서도 3D 씬 정상 렌더
- [ ] HUD 문구 보임 ("codingmola · game-01 · day 0")
- [ ] "두려워도 눌러봐" 버튼 클릭 시 시작 오버레이 사라짐
- [ ] 방향키/WASD로 흰 콘(플레이어)이 움직임
- [ ] Cloudflare Spend Alert 3단계 설정 완료
- [ ] `/privacy`, `/terms` 라우팅 가능 (static copy 배포 OK)
- [ ] 도메인 후보 확정 (codingmola.com 서브 / .games / pages.dev 유지 중 1)

## 주의

- 빌드 툴 없음 — 순수 단일 HTML. 배포 간소화 원칙.
- ESM importmap으로 three.js를 jsdelivr에서 로드 → 오프라인 테스트 시 실패할 수 있음.
- 나중에 멀티플레이(Week 2) 붙일 때는 Cloudflare Workers + Durable Objects 또는 PartyKit로 분리 배포.

## 사용자가 직접 해야 할 것

Cloudflare 계정 로그인과 GitHub 연결은 인증이 필요해서 Claude가 대신 못 함.
위 **옵션 A** 3~5단계만 사용자가 직접 진행해주면 됨.
