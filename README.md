# game-01 (codingmola)

6주 동안 3D 웹 멀티플레이 게임 1개를 공개 개발 · 수익화하는 실전일기 프로젝트.
모든 코드·수치·실패를 정직하게 공개합니다.

**운영자:** 코딩몰라 (비개발자 바이브코더)
**시작:** 2026-04-19
**마감(MVP):** 2026-05-31
**레퍼런스:** fly.pieter.com, vibe-jet, Vector Tango

---

## 헌법 (Constitution) — 불변 5원칙

1. **정직** — 조회수/매출/개발시간을 가감 없이 공개. 조작·과장 금지.
2. **공감** — "내가 풀고 싶은 재미"를 먼저 검증하고, 같은 경험을 원하는 사람과 공유.
3. **실행** — 7일 단위 릴리즈. 완벽주의 금지. "부끄러워도 배포".
4. **사회적 가치** — 도박성/허위/자극만을 위한 메커닉 금지. 즐거움·배움·공감 중 최소 1개.
5. **오픈 개발** — 전 과정을 코딩몰라 실전일기로 공개. 실패도 기록.

## 규칙 (Rules) — v2 Hardened (2026-04-19)

- 90% 이상 AI 생성 코드 (Vibe Jam 규격) — commit 메시지에 `[AI]` / `[HUMAN]` 태그로 자기검증
- Three.js + Cursor + Claude Code 스택 고정 (첫 3개월)
- Three.js 자체 호스팅 (`/vendor/three.module.js`) — CDN 의존 금지
- 브라우저 즉시 실행, 로그인/설치/결제벽 없음
- 멀티플레이 우선 (바이럴 계수 ↑)
- 제품명/개인 실명 노출 금지 — GitHub org = `codingmola` (개인 `HanjuJo` 불가)
- 작업은 **개인 장비 · 개인 네트워크**에서만 (회사 장비/계정/시간 사용 금지)
- 에셋은 `assets/LICENSES.md`에 등록된 CC0/생성본만 — 등록 없이 커밋 금지
- **시간 예산: 게임 개발 4h/주 + 콘텐츠 제작 2h/주 = 총 6h/주 상한**
- 주간 평균 수면 6h 미만 주간 발생 시 다음주 게임 작업 0h 강제 휴무
- 주 1회 `advisor` 에이전트 검토 — **매주 화요일 21:00 KST** (목→화 앞당김, 전환 여유 3일 확보)
- advisor NO-GO → 48h 쿨다운 + 1페이지 반박문 후에만 오버라이드 가능. 오버라이드 시 주간 리포트에 명시
- Cloudflare 월 지출 알림: $10 / $30 / $50 — $30 도달 시 단일 플레이 모드로 자동 전환
- 광고 스크립트는 쿠키 동의(`consent=yes`) 이후에만 inject
- IAP 도입 전 GRAC 자체등급분류 또는 한국 지역 차단 결정 문서화 필수

## Vibe Jam 2026 공식 룰 (출품 조건)

**출처:** https://vibej.am/2026/ (2026-04-20 사용자 원문 확인)

### 10개 룰 원문

1. Anyone can enter with their game.
2. **(REQUIRED)** Add the JS snippet from the widget section to your game — games without it are disqualified.
3. At least 90% of the code has to be written by AI.
4. Only NEW games created during the jam period will be accepted. Do not submit games that existed prior to April 1, 2026.
5. Game has to be accessible on web without any login or signup and free-to-play (**preferably its own domain or subdomain**).
6. Multiplayer games preferred but this is not required!
7. You can use any engine but usually ThreeJS is recommended.
8. NO loading screens and heavy downloads (!!!) — has to be almost instantly in the game (**except maybe ask username if you want**).
9. One entry per person — focus on making one really good game!
10. **Deadline: 1 MAY 2026 @ 13:37 UTC** (= 22:37 KST).

**P.S.** "You can already submit your game now and keep working on it until the deadline." → 배포 URL 확보 즉시 제출 후 계속 개선.

### 우리 상태

| 항목 | 상태 |
|---|---|
| 필수 위젯 (`<script async src="https://vibej.am/2026/widget.js">`) | ✅ `index.html` 삽입 완료 |
| 신규 게임 (2026-04-19 시작, 4/1 이후 OK) | ✅ |
| 90% AI 코드 | ✅ (commit `[AI]` 태그로 자기검증) |
| 로그인/결제벽 없음, free-to-play | ✅ |
| 로딩 화면 없음 | ✅ (단일 HTML, 즉시 실행) |
| ThreeJS 엔진 | ✅ (자체 호스팅) |
| 자체 도메인/서브도메인 (**가산점**) | ⏳ Week 0 결정 필요 |
| 멀티플레이 | ⏳ Week 2 Durable Object |
| 퍼블릭 배포 URL | ⏳ 사용자 작업 (Cloudflare Pages 연결) |

### 상금

Gold $25,000 / Silver $10,000 / Bronze $5,000 (총 $35,000)

## 검증 (Verification)

주요 결정 전 `advisor` 에이전트 호출:
- 장르 결정 전
- MVP 출시 전
- 수익화 모델 도입 전
- 매주 금요일 체크포인트

판정 근거는 수치만 허용. 감·바람 불가.

## 수익 모델 — v5 (2026-04-20, 매장 전면 무료 + 간접 수익 6경로)

**원칙:** 매장·회사·모임 주최자는 전면 무료. 수익은 플레이어 측 + 매장의 자발적 부가구매에서. 상세는 `docs/MONETIZATION.md` 참조.

| # | 경로 | 시작 | DAU 게이트 |
|---|---|---|---|
| 1 | 코딩몰라 채널 (유튜브/블로그/쿠팡파트너스) | Week 1 | 없음 |
| 2 | 개인 스킨/팁잔 (Stripe) | Week 1 D5 | 없음 |
| 3 | 연습모드 Adsterra 배너 | Week 4 | DAU 100+ |
| 4 | 로컬 스폰서 슬롯 (바터 또는 유료) | Week 4 | 매장 3곳+ |
| 5 | 기프티콘 도매 마진 (카카오 for Biz) | Week 7-8 | 매장 5곳+ |
| 6 | 브랜드 스폰서 챌린지 (CPV 모델) | Week 12+ | DAU 1,000+ |

**불변 원칙:** 매장 이벤트 참여 흐름엔 광고/업셀 0. 광고는 개인 연습모드·일일 챌린지에서만. 게임플레이 유료화 금지(스킨만). PIPA 24h 삭제.

법규 체크리스트는 `docs/LEGAL.md` 참조 (경품표시법/GRAC/PIPA/광고표시).

## 6주 로드맵 — v5 이중 트랙 (B2C 바이럴 + B2B 매장)

한 주 = **토 00:00 ~ 금 23:59 (KST)**. advisor 검토 = 매주 화 21:00.

| Week | 기간 | B2C 바이럴 | B2B 매장 이벤트 (신규 메인) |
|---|---|---|---|
| 0 | 2026-04-19 ~ 04-25 | 스캐폴드, 배포 URL, Privacy/Terms, LEGAL/MONETIZATION 초안 | GRAC 사전 상담 문의, 섭외 매장 스케줄 |
| 1 | 2026-04-26 ~ 05-02 | **Vibe Jam 조기 제출 + 5/1까지 iterate** · `EDGE OF ZERO` 공개 | — |
| 2 | 2026-05-03 ~ 05-09 | Durable Object 2-10인 멀티 | 섭외 매장 1곳 베타 설치, `TARGET` 게임 개발 |
| 3 | 2026-05-10 ~ 05-16 | 리더보드, OG 이미지 | 실제 이벤트 1회 운영, KPI 수치 4개 측정 |
| 4 | 2026-05-17 ~ 05-23 | Adsterra + 팁잔 → 첫 $1 | 매장 수치 리포트 공개 + 로컬 스폰서 슬롯 판매 시도 |
| 5 | 2026-05-24 ~ 05-30 | 정직 리포트 블로그 | 사업자등록 + 카카오 for Biz 가입 + 매장 2-3곳 추가 |
| 6 | 2026-05-31 ~ 06-06 | 전체 KPI, GO/NO-GO | 기프티콘 API MVP, 파일럿 매장 1회 결제 성공 |

## 중단(Kill) 기준

**Week 3 말**에 DAU < 10 AND 코딩몰라 영상 평균 조회 < 500 이면:
- Week 4의 멀티플레이·광고 작업 중단
- content-only pivot (게임은 단일 플레이 유지, 채널 콘텐츠 소재로만 활용)
- `docs/advisor-log.md`에 판정 근거 기록

**언제든**: 본업(CRM 베타) 배포 일정 슬립 시 게임 작업 즉시 정지.

## 구조

```
game-01/
├── README.md              ← 이 파일 (헌법/규칙/로드맵)
├── .gitignore             ← 시크릿/빌드 산출물 제외
├── index.html             ← 단일 파일 MVP (Three.js)
├── vendor/
│   └── three.module.js    ← 자체 호스팅 (CDN 의존 제거)
├── assets/
│   └── LICENSES.md        ← 모든 에셋 출처·라이선스 대장
├── docs/
│   ├── weekly-report.md   ← 주간 솔직 리포트
│   ├── advisor-log.md     ← advisor 판정 이력 + 오버라이드 기록
│   ├── PRIVACY.md         ← 개인정보 처리방침(v5: PIPA 24h 삭제, 번호 마스킹)
│   ├── TERMS.md           ← 이용약관(v5: 실력기반 경진 프레이밍, 경품 규정)
│   ├── MONETIZATION.md    ← v5 간접 수익 6경로 상세
│   ├── LEGAL.md           ← 경품표시법/GRAC/PIPA 체크리스트
│   └── DEPLOY.md          ← Cloudflare Pages 배포 가이드
└── server/                ← Week 2부터 멀티 서버
```

## KPI 대시보드 (매주 갱신)

- DAU: _(미집계)_
- 평균 체류: _(미집계)_
- ARPDAU: _(미집계)_
- 누적 개발 시간: 0h
- 누적 매출: $0

---

**Built with Claude Code.** 90%+ AI-generated.
