//main
setTimeout(function() {
  document.querySelector('.aside-wrapper').classList.add('show');
}, 1000);

window.addEventListener('scroll', function(){
  console.log( window.scrollY )
});

const aside = document.querySelector('.aside');
const works = document.querySelector('#works');

document.addEventListener('scroll', () => {
  if (!aside || !works) return; // 안전장치

  const worksTop = works.offsetTop; // works 시작 위치
  const worksBottom = worksTop + works.offsetHeight; // works 끝 위치

  const middle = window.scrollY + window.innerHeight / 2; // 화면 중앙 기준

  // 화면 중앙이 #works 영역 안에 들어가면 글씨 흰색
  if (middle >= worksTop && middle <= worksBottom) {
    aside.classList.add('color-white');
  } else {
    aside.classList.remove('color-white');
  }
});

const balloon = document.querySelector(".blob");

balloon.addEventListener("click", () => {
  // 이미 터진 상태라면 다시 실행하지 않도록 가드
  if (balloon.classList.contains("pop")) return;

  balloon.classList.add("pop");

  // 애니메이션 끝나고 완전히 제거하고 싶으면
  setTimeout(() => {
    // balloon.style.display = "none"; // 사라지게 하고 싶으면 주석 해제
  }, 400);
});

const toTopBtn = document.querySelector("#toTopBtn");

document.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const viewportHeight = window.innerHeight;
  const pageHeight = document.documentElement.scrollHeight;

  // 페이지 하단에 도달했는지 확인
  if (scrollTop + viewportHeight >= pageHeight - 10) {
    toTopBtn.classList.add("show");
  } else {
    toTopBtn.classList.remove("show");
  }
});

// 클릭하면 상단으로 부드럽게 이동
toTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
