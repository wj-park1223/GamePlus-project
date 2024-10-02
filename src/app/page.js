import Image from "next/image";
import Link from "next/link";



export default function home() {
  return (
    <div>
      <div className="bar">
          <Link href="/">게임소식</Link>
          <Link href="/">게임할인</Link>
      </div>
      <div className="bar2">       
          <Link href="/">신작게임</Link>
          <Link href="/">인기게임</Link>
      </div>
       <div className="search">
          <input id="search-input" placeholder="검색어를 입력하세요" />
      </div>
      
      </div>
  );
}




