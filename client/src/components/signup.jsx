import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signupFail, userInfo } from '../redux/slices/signupSlice';
import './../css/signup.css';
function Signup(props) {

	//아래 세줄은 로컬state임 input text에 입력된값을 실시간으로 저장함
	//state는 기본적으로 새로고침이 되면 초기화됨
	let [id, setId] = useState('');
	let [pw, setPw] = useState('');
	let [pw2, setPw2] = useState('');
	//이건 redux slice에 있는 action함수들을 사용하려면 선언해야됨
	let dispatch = useDispatch();

	//일단 위의 state값들을 스토어에 저장하고 백엔드로 보내서 데이터베이스에 있는 id pw 와 비교해서 중복된 아이디는 회원가입 안되게끔 하고 중복이 아니라면 백엔드에서 데이터베이스에 삽입

	//여기서 값들을 redux store랑 백엔드에 보내는 코드를 짜야함
	//백엔드랑 데이터 주고받을땐 ajax 말고 axios쓰는게 편함 코드가 짧아
	//리덕스 스토어로 데이터 보낼땐 dispatch를 활용해서 보내면됩니다 
	//사용법은 검색하면 나와용


	//회원가입 버튼이 눌리면 실행되는 함수
	let signup = async () => {

	}


	return (
		<div className='signup_component'>
			<h1>회원가입</h1>
			<input
				type='text'
				placeholder='아이디를 입력하세요'
				value={id}
				onChange={(e) => setId(e.target.value)}
			/>
			<input
				type='password'
				placeholder='비밀번호를 입력하세요'
				value={pw}
				onChange={(e) => setPw(e.target.value)}
			/>
			<input
				type='password'
				placeholder='비밀번호를 다시 입력하세요'
				value={pw2}
				onChange={(e) => setPw2(e.target.value)}
			/>
			<button
				className='signup_btn'
				onClick={signup}
			>
				회원가입
			</button>

		</div>
	);
}

export default Signup;