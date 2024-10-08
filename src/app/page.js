'use client';

import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Home() {
  const [searchWord, setSearchWord] = useState('');
  const router = useRouter();

  const showSearchResult = () => {
    router.push(`https://google.com/search?q=${searchWord}`);
    setSearchWord('');
  };

  const enterKey = (event) => {
    if (event.code === 'Enter') {
      showSearchResult();
    }
  };

  return (
    <div>
      <div className="search">
        <input
          id="search-input"
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
          onKeyDown={enterKey}
          placeholder="검색어를 입력하세요"
        />
        <button onClick={showSearchResult}>검색</button>
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



