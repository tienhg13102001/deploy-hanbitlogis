import React, { Component } from "react";
import "./style/AnalyText.scss";
import AnalysisResult from "./AnalysisResult";
import AnalysisType from "./AnalysisType";
import AnalysisChart from "./AnalysisChart";
import AnalysisChartTwo from "./AnalysisChartTwo";
import AnalysisChartThree from "./AnalysisChartThree";

class AnalyText extends Component {
  isMobile;
  constructor(props) {
    super(props);
    this.isMobile = this.mobilecheck();
  }
  mobilecheck = () => {
    var check = false;
    (function (a) {
      if (
        /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
          a
        ) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
          a.substr(0, 4)
        )
      )
        check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
  };
  render() {
    return (
      <div className="Text_Container">
        <div className="Analy_TextBox">
          <div className="Analy_Title">
            <span>지입</span> 분석
          </div>
          <div className="Analy_Text">지입이란?</div>
        </div>
        <div className="Text">
          지입차량은 (주)한빛로지스 (이하 ‘회사’) 와 같은 차량 지입 전문 업체가
          화물운송을 필요로 하는 고객사 (화주) 에<br />
          차량과 운전자를 공급하고 그 대가로 계약조건에 따라 매월 일정액의
          보수를 지급받는 것을 말합니다.
          <br />
          즉, 운송회사 차량을 이용하여 개인이 차량을 구입하여 등록하고 사용에
          대한 권리금과 매월 일정한 관리비를 납부하며,
          <br />
          그 운송회사에 소속된 차량처럼 영업을 하는 행위입니다.
          <br />
          <br />
          이때 회사와 고객사는 물류운송계약 (또는 운송용역계약) 을 체결하게 되고
          이 계약을 기본으로 회사로부터 제공된
          <br />
          차량과 운전자는 고객사 (화주)에 소속되어 필요한 용도에 따라
          운송용역(service) 을 제공하게 됩니다.
          <br />
          따라서 고객사(화주)는 위 차량 및 운전장에 대하여 소속 차량 및
          운전자처럼 합법적으로 지휘 및 통제권을 행사하게
          <br />
          되지만 위 운전자의 법적 신분은 “개별 사업자 ”이므로 고객사 (화주) 는
          위 운전자에 대하여 근로기준법상의 어떠한
          <br />
          의무도 부담하지 않습니다.
          <br />
          <br />
          또한 운전자는 회사와 같은 차량지입전문업체와의 사이에
          “차량위수탁관리계약”을 체결한 뒤 고객사에 파견되어
          <br />
          근무하게 되므로 회사로부터 매월 보수를 지급받는 등 자신의 성실한 업무
          수행에 의하여 담당하게 되는 것입니다. 최근에는
          <br />
          물류 업무의 주축이라 할 수 있는 화물 수배송 업무 및 고정지출비 절갑
          차원으로 회사와 같은 차량 지입 전문 업체에 아웃소싱
          <br />
          (out-sourcing) 되어가는 추세입니다.
          <br />
          <br />
          회사는 물류 업무의 근간이라 할 수 있는 화물운송용역 업무를 수행하는
          전문업체로서 보다 과학적이고 합리적인
          <br />
          운송 프로그램을 개발하여 운송 용역 업무의 주역인 고객사와 운전자
          상호간 win - win 전략으로 이익창출 극대화를
          <br />
          위하여 노력하고자 합니다.
          <br />
        </div>
        <AnalysisResult isMobile={this.isMobile}></AnalysisResult>
        <AnalysisType></AnalysisType>
        <AnalysisChart></AnalysisChart>
        <AnalysisChartTwo></AnalysisChartTwo>
        <AnalysisChartThree></AnalysisChartThree>
      </div>
    );
  }
}

export default AnalyText;
