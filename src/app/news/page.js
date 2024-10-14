import Link from "next/link";

export default function Gamenew(){
    return(

        <div>
            <div className="gameheader">
                <h1>게임소식</h1>
            </div>

            <div className="gamenew">
                <h4>출시예정작</h4>
                <ui>
                    <li>몬스터헌터 와일즈</li>
                    <li>GTA6</li>
                    <li>포켓몬스터ZA</li>
                    <li>퍼스트 버서커: 카잔</li>
                </ui>
            </div>

            <div className="gamenew">
                <h4>게임 업데이트</h4>
                <ui>
                    <li>배틀그라운드 10/9 업데이트</li>
                    <li>몬스터헌터 와일즈 최신정보</li>
                    <li>포켓몬스터ZA 신규소식 공개</li>
                    <li>퍼스트 버서커: 카잔 도쿄게임쇼 참가</li>
                </ui>

            </div>

        </div>



    )
}