import React, { Component } from "react";
import "./style/InHanbit.scss";
import axios from "axios";
import { NavLink } from "react-router-dom";
import BoardPreview from "../../../Common/BoardPrewView";
import { Comment, Tooltip, Avatar, Badge, Empty } from "antd";
import "moment/locale/ko";
import moment from "moment";

class QnaDetail extends Component {
  state = {
    list: [],
    data: null,
    dataIndex: -1,
  };

  componentDidMount = () => {
    this.getAllList();
  };
  // getAllList = async () => {
  //   this.getAllList();
  // };
  getAllList = async (id) => {
    const rID = "hanbit_qna";
    await axios
      .get(`http://61.73.79.136:9229/api/resources?rID=${rID}`)

      .then((response) => {
        console.log(response);
        if (
          response &&
          response.data &&
          response.data.data &&
          response.data.data.rows
        ) {
          if (!id) id = this.props.location.search.slice(6);
          else {
            this.props.history.push(`/HanbitQna/InBoard?name=${id}`);
          }
          let dataIndex = 0;
          response.data.data.rows = response.data.data.rows.map((item) => {
            const date = new Date(item.simple_resources.createdAt);
            item.simple_resources.createdAt = `${date.getFullYear()}-${
              date.getMonth() + 1
            }-${date.getDate()}`;
            return item;
          });
          response.data.data.rows.map((item, ind) => {
            if (item.name === id) {
              dataIndex = ind;
            }
          });

          const data = response.data.data.rows.filter(
            (item) => item.name === id
          )[0];
          // console.log(dataIndex);
          this.setState({
            dataIndex,
            list: response.data.data.rows,
            data,
          });
        } else {
          console.error("error");
        }
      })
      .catch((e) => console.log(e));
  };
  render() {
    const data = this.state.data;
    const dataIndex = this.state.dataIndex;
    // console.log(dataIndex);

    return this.state.data ? (
      <div className="InHanbit_Container">
        <div className="InHanbit_TitleBox">
          <div className="InHanbit_Title">자유게시판</div>
          <NavLink to="/HanbitQna">
            <div className="InHanbit_Btn">목록으로</div>
          </NavLink>
        </div>
        <div className="InHanbit_Board">
          <div className="In_TitleBox">
            <div className="In_Title">
              <div style={{ marginRight: "10px" }}>
                {data.simple_resources.title}
              </div>
              <Badge
                className="site-badge-count-109"
                count={data.simple_resources.replyAt ? "답변 등록" : null}
                style={{ backgroundColor: "#52c41a" }}
              />
            </div>
          </div>
          <div className="In_Menu">
            <div className="In_Menu_People">
              {data.simple_resources.uploaderName}
            </div>
            <div
              style={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                padding: "15px",
              }}
            >
              |
            </div>
            <div className="In_Menu_Date">
              최초 등록일 :{" "}
              {moment(data.simple_resources.createdAt).format("YYYY-MM-DD")}
            </div>
            <div
              style={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                padding: "15px",
              }}
            >
              |
            </div>
            <div className="In_Menu_Date">
              최종 업데이트 :
              <Tooltip title={moment(data.lastUpdateDate).format("YYYY-MM-DD")}>
                <span> {moment(data.lastUpdateDate).fromNow()}</span>
              </Tooltip>
            </div>
          </div>
          <div className="In_Menu_Text">{data.simple_resources.body}</div>
        </div>
        {data.simple_resources.replyAt ? (
          <Comment
            // actions={actions}
            author={<div>{data.simple_resources.replyName + " 관리자"}</div>}
            avatar={
              <Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
            }
            content={<p>{data.simple_resources.replyBody}</p>}
            datetime={
              <Tooltip
                title={moment(data.simple_resources.replyAt).format(
                  "YYYY-MM-DD HH:mm:ss"
                )}
              >
                <span>{moment(data.simple_resources.replyAt).fromNow()}</span>
              </Tooltip>
            }
          />
        ) : (
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description="아직 등록된 답변이 없습니다"
          />
        )}
        {dataIndex !== -1 ? (
          <BoardPreview
            list={this.state.list}
            dataIndex={this.state.dataIndex}
            getAllList={this.getAllList}
          ></BoardPreview>
        ) : null}
      </div>
    ) : (
      <div></div>
    );
  }
}

export default QnaDetail;
