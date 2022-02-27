import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addBoard } from "../actions";
import BoardThumbnail from "./BoardThumbnail";

const Thumbnails = styled.div`
  flex: 1;
  height: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  background: #f0f0f0;
`;

const Particle = styled.div`
    position: absolute;
 	border-radius: 50%;

     @for $i from 1 through 30 {
        @keyframes particle-animation-#{$i} {
            100% {
                transform: translate3d((random(90) * 1vw), (random(90) * 1vh), (random(100) * 1px));
            }
        }
        
        .particle:nth-child(#{$i}){
            animation: particle-animation-#{$i} 60s infinite;
            $size: random(5) + 5 + px;
            opacity: random(100)/100;
            height: $size;
            width: $size;
            animation-delay: -$i * .2s;
            transform: translate3d((random(90) * 1vw), (random(90) * 1vh), (random(100) * 1px));
            background: hsl(random(360), 70%, 50%);
        }
    }

 `;

const CreateTitle = styled.h3`
  font-size: 48px;
  color: black;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
`;

const CreateInput = styled.input`
  width: 300px;
  height: 80px;
  font-size: 22px;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 3px;
  border: none;
  outline-color: blue;
  box-shadow: 0 2px 4px grey;
  align-self: center;
`;



const Home = ({ boards, boardOrder, dispatch }) => {
    // this is the home site that shows you your boards and you can also create a Board here.

    const [newBoardTitle, setNewBoardTitle] = useState("");

    const handleChange = e => {
        setNewBoardTitle(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addBoard(newBoardTitle));
    };

    const renderCreateBoard = () => {
        return (
            <form onSubmit={handleSubmit} style={{ textAlign: "center", padding: 30, borderRadius: 40 }}>
                <CreateTitle>Create a new Panel</CreateTitle>
                <CreateInput
                    onChange={handleChange}
                    value={newBoardTitle}
                    placeholder="Your Panel's title..."
                    type="text"
                />
            </form>
        );
    };
    const renderBoards = () => {
        return boardOrder.map(boardID => {
            const board = boards[boardID];

            return (
                <Link
                    key={boardID}
                    to={`/${board.id}`}
                    style={{ textDecoration: "none" }}
                >
                    <BoardThumbnail {...board} />
                    <Particle />
                </Link>
            );
        });
    };

    return (
        <>
            <div class="bg"></div>
            <div class="bg bg2"></div>
            <div class="bg bg3"></div>
            <div class="content">
                {/* <HomeContainer> */}
                    <Thumbnails>{renderBoards()}</Thumbnails>
                    {renderCreateBoard()}
                {/* </HomeContainer> */}
            </div>
        </>
    )
};

const mapStateToProps = state => ({
    boards: state.boards,
    boardOrder: state.boardOrder
});

export default connect(mapStateToProps)(Home);
