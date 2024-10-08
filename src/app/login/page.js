import Link from "next/link";

export default function login(){
    return (
        <div>
            <div className="gameheader">
                <h2>로그인</h2>
            </div>
            
            <div className="loginbar">
            <form method="post" action="서버의url" id="login-form">
            <input type="text" name="userName" placeholder="Email" />
            <input type="password" name="userPassword" placeholder="Password" />
            <label htmlFor="remember-check">
                <input type="checkbox" id="remember-check" />
                아이디 저장하기
            </label>
            <button type="submit">로그인</button>
            <button type="membership">회원가입</button>
            </form>
            </div>
        
        </div>


    )








}