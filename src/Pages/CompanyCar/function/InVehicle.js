import React, { Component } from "react";
import CarPreview from "../../../Common/CarPreview";
import "./style/InVehicle.scss";
import { NavLink } from "react-router-dom";
import { data, vehicleType } from "./BoardDb";
import axios from "axios";
import { comprehensionExpression } from "jscodeshift";
class InVehicle extends Component {
	componentDidMount = () => {
		const urlParams = new URLSearchParams(window.location.search);
		const myParam = urlParams.get("id");

		// console.log(data.find((item) => item.id === Number(myParam))[0]);

		this.setState({
			index: myParam,
		});

		this.getAllList(myParam);
	};

	onChangeIndex = (index) => {
		this.setState({ index });
	};

	state = {
		index: 0,
		data:{},
		type: ''
	};
//   list = [
//     { menu: "급수", content: "1톤 내장탑 공산품 배송" },
//     { menu: "매물번호", content: "201703" },
//     { menu: "분양상태", content: "차주 매매" },
//     { menu: "연식", content: "2007" },
//     { menu: "품목", content: "상온 / 공산품" },
//     { menu: "출근지", content: "양주복지리 (bgf 리테일 양주센터)" },
//     { menu: "배송지", content: "의정부 - 서울 관내" },
//     { menu: "근무시간", content: "08:00 - 16:00" },
//     { menu: "휴무", content: "월 4회(일요일)" },
//     { menu: "월급료", content: "320만원 + 유가 보조금 (월 15만원)" },
//     { menu: "제공사항", content: "유류대, 주차료, 통행료" },
//     { menu: "지입료", content: "21만원" },
//     { menu: "보험료", content: "서울화물공제조합" },
//     { menu: "할부금", content: "무" },
//     { menu: "차량인수금", content: "1,800만원" },
//     { menu: "연령 / 기타", content: "무" },
//     { menu: "시간", content: "주간" },
//   ];

  getAllList = async (uniqueId) => {
		const rID = "hanbit_vehicle";
		await axios
		.get(`http://61.73.79.136:9229/api/resources?rID=${rID}`)

		.then((response) => {
			if (
			response &&
			response.data &&
			response.data.data &&
			response.data.data.rows
			) {
				// console.log(response);

				response.data.data.rows = response.data.data.rows.map((item) => {
					const date = new Date(item.simple_resources.registDt);
					item.simple_resources.registDt = `${date.getFullYear()}-${
						date.getMonth() + 1
					}-${date.getDate()}`;
					return item;
				});

				response.data.data.rows = response.data.data.rows.filter((item) => {
					return item.name === uniqueId;
				})

				if(response.data.data.rows.length > 0){
					console.log(response.data.data.rows[0].simple_resources)
					this.setState({
						...this.state,
						type: response.data.data.rows[0].simple_resources["type"],
						data: response.data.data.rows[0].simple_resources,
					});
				}
				
			} else {
			console.error("error");
			}
		})
		.catch((e) => console.log(e));
	};

	keys = ['level', 'saleNo', 'saleState', 'modelYear', 'product', 'workPlace', 'destination', 'startDt', 'endDt', 'holiday', 'monthlyPay', 'offer', 'paymentFee', 'insuranceFee', 'installmentPay', 'vehicleFee', 'etc', 'workTime']
	columns = {
		title: "제목",
		type: "차량구분",
		level: "급수",
		saleNo: "매물번호",
		saleState: "분양상태",
		modelYear: "연식",
		product: "품목",
		workPlace: "출근지",
		destination: "배송지",
		startDt: "근무 시작시간",
		endDt: "근무 마감시간",
		holiday: "휴무",
		monthlyPay: "월 급료",
		offer: "제공사항",
		paymentFee: "지입료",
		insuranceFee: "보험료",
		installmentPay: "할부금",
		vehicleFee: "차량 인수금",
		etc: "연령, 기타",
		workTime: "근무시간",
	}

	render() {
		const {type, data} = this.state;

		return (
		<div className="In_Container">
			<div className="In_TitleBox">
			<div className="In_Title">당사차량 [{vehicleType[type]}]</div>
			</div>
			<div className="In_SubTitle">
			<div className="In_SubText">· {data.title}</div>
			<NavLink to="/Vehicle/onevehicle">
				<div className="Go_Button">목록으로</div>
			</NavLink>
			</div>
			<div className="In_Contents">
			{this.keys.map((key, index) => {
				return (
					<div className="In_Box" key={index}>
						<div className="In_Menu">{this.columns[key]}</div>
						<div className="In_Content">{data[key]}</div>
					</div>
				);
			})}
			</div>
			<div className="BottomText">매매 문의 : 1599 - 9964</div>
			<CarPreview
			prevData={data[this.state.index - 1]}
			nextData={data[this.state.index + 1]}
			onChangeIndex={this.onChangeIndex}
			></CarPreview>
		</div>
		);
  	}
}

export default InVehicle;
