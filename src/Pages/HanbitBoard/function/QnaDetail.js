import React, { Component } from "react";
import "./style/InHanbit.scss";
import axios from "axios";
import { NavLink } from "react-router-dom";
import WriteHanbit from "../WriteHanbit";
import BoardPreview from "../../../Common/BoardPrewView";
import { Comment, Tooltip, Avatar, Badge, Empty, Dropdown, Menu } from "antd";
import "moment/locale/ko";
import moment from "moment";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import avatarLogo from "../../../_asset/image/board/Group 2.png";
class QnaDetail extends Component {
  state = {
    list: [],
    data: null,
    dataIndex: -1,
    isDialogOpen: false,
    password: null,
    isPasswordValid: null,
  };

  componentDidMount = () => {
    this.getAllList();
  };
  // getAllList = async () => {
  //   this.getAllList();
  // };
  handleClickOpen = (mode) => {
    this.setState({ mode: mode }, () => this.setState({ isDialogOpen: true }));
  };

  handleClose = () => {
    this.setState({ isDialogOpen: false, password: null });
  };

  menu = (
    <Menu>
      <Menu.Item onClick={() => this.handleClickOpen("modify")}>
        <div>수정</div>
      </Menu.Item>
      <Menu.Item onClick={() => this.handleClickOpen("delete")}>
        <div>삭제</div>
      </Menu.Item>
    </Menu>
  );

  deletePost = (id) => {
    const rID = "hanbit_qna";
    axios
      .put(`http://61.73.79.136:9229/api/resources/delete`, {
        query: { rID, name: id },
      })
      .then((response) => {
        if (response.data._COM.code === 1000) {
          this.props.history.goBack();
        } else {
          console.log("새로고침 후 다시 시도해주세요");
        }
      })
      .catch((e) => console.log(e));
  };

  getAllList = async (id) => {
    const rID = "hanbit_qna";
    await axios
      .get(`http://61.73.79.136:9229/api/resources?rID=${rID}`)

      .then((response) => {
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
            if (item.name === id ? id : this.state.id) {
              dataIndex = ind;
            }
          });

          const data = response.data.data.rows.filter((item) =>
            item.name === id ? id : this.state.id
          )[0];
          // console.log(dataIndex);
          this.setState(
            {
              dataIndex,
              list: response.data.data.rows,
              data,
            },
            () => console.log(data)
          );
        } else {
          console.error("error");
        }
      })
      .catch((e) => console.log(e));
  };

  handlePassChange = (e) => {
    this.setState({ password: e.target.value });
  };

  handlePasswordValidation = (id) => {
    if (this.state.data.simple_resources.password === this.state.password) {
      this.setState({ isPasswordValid: true }, () => this.handleClose());
      if (this.state.mode === "modify") {
        this.props.history.push(`/HanbitQna/WriteBoard/InBoard?name=${id}`);
      } else if (this.state.mode === "delete") {
        this.deletePost(id);
      }
    } else {
      this.setState({ isPasswordValid: false });
    }
  };

  render() {
    const data = this.state.data;
    const dataIndex = this.state.dataIndex;

    return this.state.data ? (
      <div className="InHanbit_Container">
        <div className="InHanbit_TitleBox">
          <div className="InHanbit_Title">자유게시판</div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Dropdown overlay={this.menu} placement="bottomRight" arrow>
              {/* <Button>bottomCenter</Button> */}
              <IconButton
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                // onClick={handleClick}
              >
                <MoreVertIcon />
              </IconButton>
            </Dropdown>
            <NavLink to="/HanbitQna">
              <div className="InHanbit_Btn">목록으로</div>
            </NavLink>
            <Dialog open={this.state.isDialogOpen} onClose={this.handleClose}>
              <DialogTitle>
                {this.state.mode === "modify" ? "게시물 수정" : "게시물 삭제"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText>
                  게시물 작성시 입력한 비밀번호를 입력해 주세요.
                </DialogContentText>
                <TextField
                  error={this.state.isPasswordValid === false}
                  autoFocus
                  margin="dense"
                  id="password"
                  label={
                    this.state.isPasswordValid === false
                      ? "비밀번호가 일치하지 않습니다."
                      : "게시물 비밀번호"
                  }
                  type="password"
                  fullWidth
                  variant="standard"
                  onChange={this.handlePassChange}
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleClose}>취소</Button>
                <Button
                  onClick={() =>
                    this.handlePasswordValidation(this.state.data.name)
                  }
                >
                  확인
                </Button>
              </DialogActions>
            </Dialog>
          </div>
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
                style={{ backgroundColor: "#da2320" }}
              />
            </div>
          </div>
          <div className="In_Menu">
            <div className="In_Menu_People" style={{ marginRight: "10px" }}>
              {data.simple_resources.uploaderName}
            </div>
            {/* <div
              style={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                padding: "15px",
              }}
            >
              |
            </div> */}
            <div className="In_Menu_Date" style={{ marginRight: "10px" }}>
              최초 등록일 :{" "}
              {moment(data.simple_resources.createdAt).format("YYYY-MM-DD")}
            </div>
            {/* <div
              style={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                padding: "15px",
              }}
            >
              |
            </div> */}
            <div className="In_Menu_Date">
              최종 업데이트 :
              <Tooltip title={moment(data.lastUpdateDate).format("YYYY-MM-DD")}>
                <span> {moment(data.lastUpdateDate).fromNow()}</span>
              </Tooltip>
            </div>
          </div>
          <div className="In_Menu_Text">{data.simple_resources.body}</div>
        </div>
        <div style={{ padding: "0 20px" }}>
          {data.simple_resources.replyAt ? (
            <Comment
              // actions={actions}
              author={<div>{data.simple_resources.replyName + " 관리자"}</div>}
              avatar={<Avatar src={avatarLogo} alt="Han Solo" />}
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
        </div>
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
