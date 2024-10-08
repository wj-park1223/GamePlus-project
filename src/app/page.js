import Image from "next/image";
import Link from "next/link";



export default function home() {
  return (
    <div>

<div className="search">
        <input id="search-input" placeholder="검색어를 입력하세요" />
        <button>검색</button>
      </div>

      <div className="bar">
      <div><Link href="/news">게임소식</Link></div>
        <div><Link href="/discount">게임할인</Link></div>
         <div><Link href="/new">신작게임</Link></div>
        <div><Link href="/popular">인기게임</Link></div>
        </div>
      


      </div>
  );
}

