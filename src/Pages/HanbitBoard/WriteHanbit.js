import React, { useState, Component } from "react";
import { useHistory } from "react-router-dom";
import "./style/WriteHanbit.scss";
import axios from "axios";
import { InfoCircleOutlined } from "@ant-design/icons";

import { Form, Input, Checkbox, Button } from "antd";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  //   number: {
  //     range: "${label} must be between ${min} and ${max}",
  //   },
};
/* eslint-enable no-template-curly-in-string */
const Demo = (props) => {
  const history = useHistory();
  const onFinish = (values) => {
    console.log("form data : ", values);
    if (
      values.title.length === 0 ||
      values.name.length === 0 ||
      values.password.length === 0 ||
      values.content.length === 0
    ) {
      return alert("입력값을 다시 한 번 확인해주세요.");
    }
    if (!values.agreement) {
      return alert("게시판 이용약관에 동의해주세요.");
    }

    const rID = "hanbit_qna";
    const formData = new FormData();
    formData.append("_data", JSON.stringify({ rID }));
    formData.append("title", values.title);
    formData.append("body", values.content);
    formData.append("createdAt", new Date().toISOString());
    formData.append("uploaderName", values.name);
    formData.append("password", values.password);
    axios
      .post("http://61.73.79.136:9229/api/resources/add", formData)
      .then((response) => {
        console.log(response.status === 200);
        if (response.status === 1000 || response.status === 200) {
          history.goBack();
        } else {
          alert("새로고침 후 다시 시도해주세요", response.status === 200);
        }
      })
      .catch((e) => console.log(e));
  };
  return (
    <div className="Write_HanbitBoard_Container">
      <div className="Write_HanbitBoard_Title" style={{ marginBottom: "30px" }}>
        게시판 글쓰기
      </div>
      <Form
        {...layout}
        layout="vertical"
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name="title"
          label="제목"
          rules={[
            {
              required: true,
              message: "제목은 필수 입력사항 입니다.",
            },
          ]}
        >
          <Input placeholder="게시글의 제목을 입력해 주세요." />
        </Form.Item>
        <Form.Item
          name="password"
          label="게시글 비밀번호"
          tooltip={{
            title: "수정 삭제를 위해 꼭 기억해 주세요!",
            icon: <InfoCircleOutlined />,
          }}
          rules={[
            {
              required: true,
              message: "게시글 비밀번호는 필수 입력사항 입니다.",
            },
          ]}
          hasFeedback
        >
          <Input.Password placeholder="등록 후 수정 삭제를 위해 꼭 기억해 주세요!" />
        </Form.Item>
        <Form.Item
          name="passwordConfirm"
          label="게시글 비밀번호 확인"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "비밀번호를 한번 더 확인해 주세요.",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("입력한 두 개의 비밀번호가 일치하지 않습니다!")
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="name"
          label="닉네임"
          tooltip={{
            title: "미입력시 익명으로 표시됩니다.",
            icon: <InfoCircleOutlined />,
          }}
          rules={[
            {
              //   required: true,
              message: "넥네임을 입력해 주세요.",
            },
          ]}
        >
          <Input placeholder="미입력시 익명으로 표시됩니다." />
        </Form.Item>

        <Form.Item
          name="content"
          rules={[
            {
              required: true,
              message: "내용은 필수 입력사항 입니다.",
            },
          ]}
        >
          <Input.TextArea
            placeholder="내용을 입력해 주세요"
            style={{ minHeight: "300px" }}
          />
        </Form.Item>
        <div className="privacy-wrap">
          <div className="title">게시판 이용 약관</div>
          <div className="privacy-box">
            <div>
              1. 오픈된 공개 게시판으로 모든 정보가 타인에게도 공개됩니다.
              개인정보 입력시 유의해 주세요. <br></br>2. 욕설 및 비방 게시물은
              별도의 안내 없이 삭제될 수 있습니다.
            </div>
          </div>
          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(new Error("약관 동의는 필수 사항입니다.")),
              },
            ]}
            {...tailFormItemLayout}
          >
            <Checkbox>게시판 이용약관에 동의합니다.</Checkbox>
          </Form.Item>
        </div>
        <Form.Item wrapperCol={{ ...layout.wrapperCol }}>
          <div className="register-button-container">
            <Button htmlType="submit" className="register-button">
              <p>등록</p>
              <p>&#62;</p>
            </Button>
          </div>
        </Form.Item>
        <Button
          className="register-button"
          type="primary"
          htmlType="submit"
        ></Button>
      </Form>
    </div>
  );
};

export default Demo;
// class CommunityReviewWriter extends Component {
//   state = {
//     title: "",
//     name: "",
//     password: "",
//     content: "",
//     checked: false,
//   };
//   handleChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };
//   handleCheckBoxChange = (e) => {
//     this.setState({
//       checked: e.target.checked,
//     });
//   };
//   registerButton = () => {
//     const { title, name, password, content } = this.state;
//     if (
//       title.length === 0 ||
//       name.length === 0 ||
//       password.length === 0 ||
//       content.length === 0
//     ) {
//       return alert("입력값을 다시 한 번 확인해주세요.");
//     }
//     if (!this.state.checked) {
//       return alert("개인 정보 수집 및 이용에 동의해주세요.");
//     }

//     const rID = "hanbit_notice";
//     const formData = new FormData();
//     formData.append("_data", JSON.stringify({ rID }));
//     formData.append("title", this.state.title);
//     formData.append("content", this.state.content);
//     formData.append("createdAt", new Date().toISOString());
//     formData.append("name", this.state.name);
//     formData.append("password", this.state.password);
//     axios
//       .post("61.73.79.136:9229/api/resources/add", formData)
//       .then((response) => {
//         console.log(response);
//         if (
//           response &&
//           response.data &&
//           response.data._COM &&
//           response.data._COM.code === 1000
//         ) {
//           this.props.history.goback();
//         } else {
//           alert("새로고침 후 다시 시도해주세요");
//         }
//       })
//       .catch((e) => alert("새로고침 후 다시 시도해주세요"));
//   };
//   render() {
//     const { title, name, content, password } = this.state;
//     return (
//       <div className="Write_HanbitBoard_Container">
//         <div className="Write_HanbitBoard_Title">자유게시판 글쓰기</div>
//         <div className="Write_HanbitBoard_table">
//           <div className="Write_Title">
//             <div className="leftmenu">제목</div>
//             <div>
//               <Input
//                 // className="Title_input"
//                 name="title"
//                 value={title}
//                 onChange={this.handleChange}
//                 placeholder="제목을 입력해주세요."
//               />
//               {/* <input
//                 className="Title_input"
//                 name="title"
//                 value={title}
//                 onChange={this.handleChange}
//                 placeholder="제목을 입력해주세요."
//               ></input> */}
//             </div>
//           </div>
//           <div className="row">
//             <div>
//               <div className="leftmenu">이름</div>
//               <div>
//                 <Input
//                   //   className="Name_input"
//                   name="name"
//                   value={name}
//                   onChange={this.handleChange}
//                   placeholder="이름을 입력해주세요."
//                 />
//               </div>
//             </div>
//             <div>
//               <div className="leftmenu">비밀번호</div>
//               <div>
//                 <Input
//                   //   className="Password_input"
//                   type="password"
//                   name="password"
//                   value={password}
//                   onChange={this.handleChange}
//                   placeholder="비밀번호를 입력해주세요."
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="row" style={{ border: 0 }}>
//             <div className="leftmenu">내용</div>
//             <div>
//               <input
//                 className="Text_input"
//                 name="content"
//                 value={content}
//                 onChange={this.handleChange}
//                 placeholder="내용을 입력해주세요."
//               ></input>
//             </div>
//           </div>
//         </div>
//         <div className="privacy-wrap">
//           <div className="title">개인정보처리방침</div>
//           <div className="privacy-box">
//             <div>1. 목적 : 제휴 제안에 따른 연락처 정보 확인</div>
//             <div>2. 항목 : 회사(기관)명, 제안자명, 전화번호, 메일주소</div>
//             <div>
//               3. 보유기간 : 제휴 제안 사항 상담서비스를 위해 검토 완료 후 3개월
//               간 보관하며, 이후 해당 정보를 지체 없이 파기합니다.
//             </div>
//             <div>
//               더 자세한 내용에 대해서는 [카카오 기업사이트 개인정보처리방침]을
//               참고하시길 바랍니다.
//             </div>
//           </div>
//           <div className="checkbox">
//             <input
//               type="checkbox"
//               checked={this.state.checked}
//               onChange={this.handleCheckBoxChange}
//               id="agree"
//             ></input>
//             <label htmlFor="agree">개인정보 수집 및 이용에 동의합니다.</label>
//           </div>
//         </div>
//         <div className="register-button-container">
//           <span className="register-button" onClick={this.registerButton}>
//             <p>등록</p>
//             <p>
//               {/* <img src={}></img> 이미지가 들어가야함 */}
//               &#62;
//             </p>
//           </span>
//         </div>
//       </div>
//     );
//   }
// }

// export default CommunityReviewWriter;
