import { createGlobalStyle } from "styled-components";
import {
  b1,
  b2,
  b3,
  Banner,
  closeAcc,
  faqsBg,
  firstFoldImage,
  gameZoneBg,
  headingImage,
  Inter,
  listImage,
  mediaLg,
  mediaLgPre,
  mediaMd,
  mediaSm,
  mediaXs,
  Metrophobic,
  mintingGame,
  openAcc,
  pageWrapperImg,
  popularBg,
  primaryFont,
  RobotoFont,
  secondaryFont,
  tertiaryFont,
  timeLineBg,
} from "./utilsStyle";

const GlobalStyle = createGlobalStyle`
* {
    padding:0px;
    margin:0px;
    box-sizing:border-box;
}
.headerWrapper{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #080806;
    padding: 0px 0px;
    &.withOutNav{
        .rightNav {
            display: none;
        }
        .leftNav {
            display: none;
        }
        .logo{
            margin-left: 0px; 
        }
        .flex-row{
            justify-content:center;
        }
    }
    .logo {
        width: 160px;
        height: auto;
        margin-left: -100px;
        margin-bottom: 0px;
        cursor: pointer;
        @media all and (max-width:${mediaLg}){
            height: auto;
        }
        img{
           width: 100%;
           height:100%;
        }
       &::after {
       content: "";
       width:2px;
       height:2px;
       background-color: red;
       }
        &::before {
        content: "";
        width:2px;
        height:2px;
        background-color: pink;
        }
    }
    .navLink,a {
        font-family: ${primaryFont};
        font-weight: ${b2};
        font-size: 16px;
        line-height: 21px;
        text-transform: uppercase;
        color: #FFFFFF;
        margin-right:25px;
        cursor: pointer;
        text-decoration: none;
        &.active{
        color: #E6C04E;
        }
        &:hover{
            color: #E6C04E; 
        }
    }
}
.flex-row{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.responsiveWrapper{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #080806;
    padding: 0px 0px;
    border-bottom: 2.5px solid #E6C04E;
    &.classHeader{
       .navbar-toggler{
           display: none;
       } 
    }
    .logo {
        width: 120px;
        height: auto;
        cursor: pointer; 
    }
    .navbar-toggler{
        color: #fff;
        padding: 0px 5px 5px;
        &:active,&:focus {
           outline: none !important;
           box-shadow: none !important;
        }
        
        .navbar-toggler-icon{
            width: 22px;
            height: 22px;
            background-image: url(./assets/burger.png);
            display: inline-block;
        }
    }
}
.offcanvas{
    background: #000;
    width: 300px;
    .offcanvas-header{
        justify-content: flex-end;
        position:relative;
        svg{
            position: absolute;
            right: 20px;
            font-size: 18px;
            color: #fff;
            path {
                fill: #fff;
            }
        }
        .btn-close{
            background: none;
            z-index: 11; 
        }
    }
    .navLink,a {
        font-family: ${primaryFont};
        font-weight: ${b2};
        font-size: 20px;
        line-height: 21px;
        text-transform: uppercase;
        color: #FFFFFF;
        cursor: pointer;
        padding-bottom: 20px;
        padding-top: 20px;
        border-bottom: 1px solid #fff;
        text-decoration: none;
        &.active{
        color: #E6C04E;
        }
    }
}
.footer{
  background: #000;
  border-top: 1px solid rgba(225,225,225,0.1);
  padding: 50px 0px 70px 0px;
  position: relative;
  overflow:hidden;
  .placeholderImage{
     position: absolute;
     top: 70px;
     right:0px;
     @media all and (max-width:${mediaLg}){
       display:none;
    }
   }
  .innerContainer{
    width: 1068px;
    margin:0 auto;
    @media all and (max-width:${mediaLg}){
        width: 100%;
    }
    .logoRow {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 25px;
        border-bottom: 1px solid rgba(225,225,225,0.1);
            @media all and (max-width:${mediaLg}){
                flex-direction: column;
            }
      .logo{
        width: 150px;
        cursor: pointer;
        @media all and (max-width:${mediaLg}){
           margin-bottom: 40px;
        }
      }  
      .getStarted {
            display: flex;
            align-items: center;
            @media all and (max-width:${mediaXs}){
                flex-direction: column;
                width: 100%;
            }
        .getStartedText{
            font-style: normal;
            font-weight: normal;
            font-size: 22px;
            line-height: 29px;
            color: #FFFFFF;
            margin-bottom:0px;
            margin-right: 30px;
            font-family: ${secondaryFont};
        }
      } 
    }
  }
}
.btnGetStarted{
   background: #E6C04E;
   font-style: normal;
   font-weight: normal;
   font-size: 20px;
   line-height: 19px;
   color: #1E2833;
   padding: 10px 35px;
   font-family: ${tertiaryFont};
   text-decoration: none;
   transform: skew(15deg, 0deg);
   display: inline-block;
}
.footerNavWrapper {
    padding: 0px 0px 0px 30px;
    @media all and (max-width:${mediaLg}){
        padding: 0px 0px 0px 0px;
    }
   .subscribe{
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 29px;
    letter-spacing: -0.3px;
    color: #FFFFFF;
    margin-bottom:30px;
    width:165px;
    font-family: ${secondaryFont};
    margin-top: 40px;
    margin-bottom: 30px;
   }
   .formWrapper{
     width: 100%;
     position: relative;
    .actionBtn{
        padding: 15px;
        background: #E6C04E;
        border-radius: 8px 8px 0px 0px;
        position: absolute;
        right: 0px;
        top: 0px;
        img{
            width: 14px;
        }
    }
    .input {
        padding: 10px 0px 24px 0px;
        font-family: ${secondaryFont};
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 20px;
        color: #FFFFFF;
        width: 100%;
        background-color: transparent;
        outline: none;
        border: none;
        border-bottom: 1px solid rgba(225,225,225,0.1);
        &:placeholder{

        }
        &::focus-visible {
            outline:none;
            border:none;
            box-shadow:none;
            border-bottom: 1px solid rgba(225,225,225,0.1);
        }
    }
   }
}
.navList{
    padding: 0px;
    list-style: none;
    margin-top: 40px;
    &.pl {
        padding-left:30px;
        @media all and (max-width:${mediaLg}){
            padding-left:0px;
        }
    }
   .navLink{
    font-style: normal;
    font-weight: normal;
    font-family: ${secondaryFont};
    font-size: 15px;
    line-height: 20px;
    letter-spacing: -0.204545px;
    color: #FFFFFF;
    margin-bottom:20px;
    &.active{
        color: #E6C04E;
    }
   } 
}
.copyRightWrapper{
    background: #000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 30px;
    margin-top:50px;
    @media all and (max-width:${mediaLg}){
        padding:0px;
    }
  .left-policy {
    .link {
        font-family: ${secondaryFont};
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 20px;
        color: #FFFFFF;
        letter-spacing: -0.204545px;
        margin-right:20px; 
        text-decoration: none; 
    }
  }
  .right-policy {
    .link{
        margin-right:20px;
        display: inline-block;
        width: 20px;
        img{
            width: 100%;
        }
        .fb {
          width:10px;    
        }
    }
  }
}
.CryptomeriaAlliance{
    padding: 140px  0px 110px 0px;
    background: #131327;
    .row{
        width:1280px;
        margin: 0 auto;
        @media all and (max-width:${mediaLgPre}){
        width: 100%;
        }
    }
    .b-sm-n-c{
        @media all and (max-width:${mediaMd}){
          border-right: none !important;
        } 
    }
    .fR{
        margin-top:80px;
    }
    .sR{
        margin-top:40px; 
    }
    .col {
        text-align:center;
        @media all and (max-width:${mediaMd}){
            margin-bottom:50px;
        } 
    }
    .bR{
        border-right: 1px solid rgba(225,225,225,0.1)
    }
    img{
        width:150px
    }
}
.headingMain{
    font-family: ${primaryFont};
    font-style: normal;
    font-weight: ${b2};
    font-size: 40px;
    line-height: 70px;
    color: #FFFFFF;
    text-transform: uppercase;
    text-align: center;
    @media all and (max-width:${mediaSm}){
        font-size: 30px;
        line-height: 40px;
    }
    &.timeLineHead {
        font-family: ${RobotoFont};
        font-size: 25px;
        line-height: 30px;
        width: 278px;
        text-align:left;
        text-transform: uppercase;
        margin: 40px 20px 10px 20px;
        span{
            &:after{
                width:140px;
                @media all and (max-width:${mediaSm}){
                    display: none;
                }
            }
        }
    }
    span{
        color: #E6C04E;
        position: relative;
        &:after{
            content: "";
            width:160px;
            height:30px;
            background-image: url(${headingImage});
            z-index: 1;
            background-position: center;
            background-size: cover;
            position: absolute;
            bottom: -10px;
            right: 50%;
            transform: translateX(120px);
            @media all and (min-width:${mediaMd}) and (max-width:${mediaLg}){
                display: none;
            }  
        }   
    }
   
}
.timelineWrapper{
    padding: 80px 0px;
    background:url(${timeLineBg});
    background-color: rgba(19, 19, 39, 1);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    background-size:cover;
    background-position: top;
}
.timeLineList{
  margin: 0px 40px;
  padding: 0px;
  list-style:none;
  &.mt-negative{
   margin-top: -177px;
  }
  .listItem{
    font-family: ${RobotoFont};
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 30px;
    padding: 0px;
    color: #FFFFFF;
    position: relative;
    &:before{
     content:"";
     background: #00FFFA;
     width: 12px;
    height: 12px;
    position: absolute;
    left: -18px;
    top: 10px;
    clip-path: polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%);
    }
  } 
}
.timeline {
	position: relative;
	padding: 0px 0;
	width: 1000px;
    margin: 0 auto;
	box-sizing: border-box;
    @media all and (max-width:${mediaLg}) {
        width: 100%;
    }
	&:before {
		content: '';
		position: absolute;
		left: 50%;
        width: 3px;
        height: 87.3%;
        background: #00FFFA;
        @media all and (max-width:${mediaLg}) {
            height: 100%;
        }
	}
    &:after {
	   content: '';
	   position: absolute;
       width: 54px;
       height: 54px;
        top: -54px;
        left: 47.5%;
        background: #00FFFA;
	   border-radius: 50%;
	   box-shadow: 0 0 0 3px rgba(0, 255, 250, 0.25);
	}
	.mainTimeUl {
		padding: 0;
		margin: 0;
        display: inline-block;
        @media all and (max-width:${mediaSm}) {
          width: 100%;
        }
		.mainTimeLi {
			list-style: none;
			position: relative;
			width: 50%;
			box-sizing: border-box;
			&:nth-child(odd) {
				float: left;
				clear: both;
                text-align: left;
                padding: 50px 100px 50px 10px;
                .content {
                    background: rgba(6, 43, 73, 0.3);
                    border: 2px solid #00FFFA;
                    box-sizing: border-box;
                    backdrop-filter: blur(19px);
                    border-radius: 20px;
                    padding-bottom: 20px;
                }
				&:before {
					content: '';
					position: absolute;
					width: 30px;
					height: 30px;
                    top: 47%;
                    right: 84px;
                    background: #00FFFA;
					border-radius: 50%;
                    z-index: 1;
                    box-shadow: 0 0 0 3px rgba(0, 255, 250, 0.25);
				}
                &:after{
                    content:"";
                    position: absolute;
                    top: 50%;
                    right: 0px;
                    width: 100px;
                    height: 3px;
                    background: #00FFFA;
                    @media all and (max-width:${mediaMd}) {
                        display: none;
                    }
                }
			}
			&:nth-child(even) {
				float: right;
				text-align: left;
				clear: both;
                padding: 50px 10px 50px 100px;
                .content {
                    background: rgba(6, 43, 73, 0.3);
                    border: 2px solid #00FFFA;
                    box-sizing: border-box;
                    backdrop-filter: blur(19px);
                    border-radius: 20px;
                    padding-bottom: 20px;
                }
				&:before {
					content: '';
					position: absolute;
					width: 30px;
					height: 30px;
                    top: 47.5%;
					left: 85px;
                    z-index:1;
                    background: #00FFFA;
					border-radius: 50%;
                    box-shadow: 0 0 0 3px rgba(0, 255, 250, 0.25);
				}
                &:after{
                    content:"";
                    position: absolute;
                    top: 50%;
                    left: 0px;
                    width: 100px;
                    height: 3px;
                    background: #00FFFA;
                    @media all and (max-width:${mediaMd}) {
                        display: none;
                    }
                }
			}
		}
	}
}
.loremText{
    visibility: hidden;
}
@media all and (max-width:${mediaMd}) {
	.timeline {
		width: 100%;
		padding-bottom: 0;
		&:before {
			left: 20px;
			height: 100%;
		}
        &:after {
            width: 30px;
            height: 30px;
            top: -25px;
            left: 7px;
		}
        .mt-negative{
          margin-top: -108px;
        }
		.mainTimeUl {
			.mainTimeLi {
				&:nth-child(odd) {
					width: 100%;
					text-align: left;
                    padding: 50px;
					&:before {
                        top: 50%;
                        left: 11px;
                        width: 20px;
                        height: 20px;
					}
				}
				&:nth-child(even) {
					width: 100%;
					text-align: left;
                    padding: 50px;
					&:before {
                        top: 50%;
                        left: 11px;
                        width: 20px;
                        height: 20px;
					}
				}
			}
		}
	}
}
.roadMapWrapper{
    padding: 147px 0px 0px 0px;
    @media all and (max-width:${mediaSm}){
        padding: 50px 0px 0px 0px;
    }
    .headingMain{
        text-align: center;
    }
    .decText{
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 23px;
        text-transform: uppercase;
        color: #00FFFA;
        text-align: center;
        margin: 20px 0px 10px 0px;
        font-family: ${secondaryFont};
        @media all and (max-width:${mediaLgPre}){
          width: 80%;
          margin: 30px auto;
        }
    }
    .innerHead{
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 21px;
        color: #FFFFFF;
        width: 703px;
        margin: 0 auto;
        text-align: center;
        font-family: ${secondaryFont};
        @media all and (max-width:${mediaMd}){
            width: 80%;
           
        }
    }
}
.variationsWidget{
    width: 1000px;
    margin: 0px auto;
    @media all and (max-width:${mediaLg}) {
        width: 100%;
        padding: 80px 0px;
    }
    .row{
     @media all and (max-width:${mediaLg}) {
      width: 100%;
     }   
    }
    .variationItem{
      padding-top: 10px;
      text-align: center;
     .clipImage{
      width: 100%;
      height: auto;
      border-radius: 10px;
      @media all and (max-width:${mediaLg}) {
        width: 350px;
        margin: 0 auto;
      }
      @media all and (max-width:${mediaSm}) {
        width: 250px;
        margin: 0 auto;
      }
     } 
     .clipText{
        font-size: 24px;
        line-height: 25px; 
        text-align: center;
        margin-bottom:24px;
        margin-top:10px;
        font-family: ${RobotoFont};
        @media all and (max-width:${mediaLg}) {
            margin-top:30px;
        }
        @media all and (max-width:${mediaSm}) {
            font-size: 20px;
        }
     }  
     .decText{
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 20px;
        color: #FFFFFF;
        font-family: ${secondaryFont};
        text-align: center;
        text-transform: capitalize;
     }
    }
}
.MintingGame{
  padding: 120px 0px;
  background:url(${mintingGame});
  background-size:cover;
  background-position: center;
  background-color: rgba(19, 19, 39, 1);
  position: relative;
  @media all and (max-width:${mediaLg}) {
    padding: 70px 0px;
  }
  .headingMain{
      margin-bottom: 20px;
  }
  .decText{
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;
    width: 703px;
    margin: 0 auto;
    font-family: ${secondaryFont};
    text-align: center;
    text-transform: capitalize;
    width: 100%;
    @media all and (max-width:${mediaLgPre}) {
        width: 80%;
    }
  }
   .sideImage{
    width: 100%;
    @media all and (max-width:${mediaLgPre}) {
        width: 80%;
    } 
    @media all and (max-width:${mediaLg}) {
        width: 100%;
    } 
    @media all and (max-width:${mediaMd}) {
        position: relative;
        width: 50%;
        margin: 0 auto;
    } 
   }
  .col-sm-12 {
    @media all and (max-width:${mediaLgPre}) {
        text-align: center;
        position: relative;
    }  
  }
  .mt-c{
    padding-top: 272px; 
    padding-bottom: 0px;
    font-family: ${RobotoFont};
    text-align:left;
    line-height: 40px;
    @media all and (max-width:${mediaLg}) {
        padding-top: 50px; 
    }
    span {
        &:after{
         bottom: -3px;
         right: 93px;   
        }
    }
    
  }
  .innerDec{
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;  
    font-family: ${secondaryFont};
    text-align: left;
    margin-bottom:30px;
    @media all and (max-width:${mediaLg}) {
        width: 100%;
    }
  }
}
.PopularWrapper{
  padding-top: 200px;
  padding-bottom:100px;
  background: #0E1922;
  position: relative;
  background: url(${popularBg});
  background-color: rgba(19, 19, 39, 1);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  background-position: center;
  background-size: cover;

  .head{
     margin-bottom: 73px;
     line-height: 55px;  
  }
  .tip {
    position: absolute;
    @media all and (max-width:${mediaLg}) {
        display: none;
    }
    &.p1Tip{
        left: 0px;
        top: 5%;
        width: 200px;
    }
    &.p2Tip{
        right: 0px;
        top: 20%;
        width: 100px;
    }
    &.p3Tip{
        left: 0px;
        top: 50%;
        width: 100px;
    }
    &.p4Tip{
        right: 0px;
        bottom: 0px;
        width: 400px; 
    }
  }
  .innerRow{
      width: 1000px;
      margin: 0 auto;
    @media all and (max-width:${mediaLg}) {
        width: 100%;
    }   
  }
  .col-12 {
    @media all and (max-width:${mediaLg}) {
       text-align:center;
    }   
  }

  .leftImage{
    @media all and (max-width:${mediaLg}) {
        width: 350px;
        margin: 0 auto;
    } 
  }
  .textWrapper{
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content:center;
  }
  .innerHead{
    font-size: 25px;
    line-height: 30px; 
    font-family:${RobotoFont}; 
    margin-bottom: 30px;
    text-align: left;
    @media all and (max-width:${mediaLg}) {
        text-align: center;
    } 
  }
  .dec{
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 28px;
    color: #FFFFFF; 
    font-family: ${secondaryFont}; 
  }
}
.firstFoldWrapper{
    height: 1045px;
    background: url(${Banner});
    background: linear-gradient(0deg, rgba(19,19,39,0.1), rgba(19,19,39,0.1)), url(${Banner});
    background-position: center;
    background-size: cover;
    position: relative;
    overflow: hidden;
    @media all and (max-width:${mediaLgPre}) {
        height:100%;
        padding: 100px 0px;
    } 
    .firstWrapper{
        padding: 510px 0px 0px 145px;
        @media all and (max-width:${mediaLgPre}) {
          padding: 70px 0px 0px 20px;
        } 
    }
    .ImageAside{
     position: absolute;
     left: 0px;
     bottom: 0px;
     @media all and (max-width:${mediaLgPre}) {
         display: none;
     } 
    }
    .GirlImage{
        width: 930px;
        position: absolute;
        right: -231px;
        top: -180px;
        z-index: 1;
        transform: rotate(-8deg);
        @media all and (max-width:${mediaLgPre}) {
            width: 720px;
            right: -40px;
            top: -100px;
            transform: rotate(8deg);
        } 
        @media all and (max-width:${mediaMd}) {
            display: none;
        } 
    }
    .heading{
        font-family: ${primaryFont};
        font-style: normal;
        font-weight: ${b2};
        font-size: 70px;
        line-height: 75px;
        color: #FFFFFF;
        text-transform: uppercase;
        width: 840px;
        @media all and (max-width:${mediaLg}) {
          width: 100%;
          font-size: 28px;
          line-height: 28px;
        } 
        span{
            color: #E6C04E;
        }
    }
    .dec{
        margin-top: 0px;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 21px;
        color: #FFFFFF;
        font-family: ${secondaryFont};
        width: 600px;
        @media all and (max-width:${mediaLg}) {
          width: 100%;
        } 
    }
    .btnRead{
        margin-top:20px;   
    }
}
.sliderWrapperC{
    width:1200px;
    margin: 0 auto;
    background: rgba(6, 43, 73, 0.3);
    border: 2px solid #E6C04E;
    box-sizing: border-box;
    backdrop-filter: blur(19px);
    border-radius: 20px;
    padding: 30px 80px;
    position: absolute;
    top: -50px;
    z-index: 1;
    left: 50%;
    transform: translateX(-50%);
    @media all and (max-width:${mediaLg}) {
        width: 90%;
        margin: 0px 10px;
        padding: 30px 40px;
    } 
    @media all and (max-width:${mediaXs}) {
        display: none;
    } 
    .sliderItemC{
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
            width: 140px;
        }
    }
    .sliderAction{
        width: 50px;
        @media all and (max-width:${mediaLg}) {
            width: 25px;
        } 
    }
}
.GamingZonePlay{
    height: 100%;
    background-image: url(${gameZoneBg});
    background-size: cover;
    background-position:top;
    .headingMain{
        text-align: center;
        padding-top:50px;
    }
    .dec-minting{
        font-family: ${secondaryFont};
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 21px;
        color: #FFFFFF;
        width: 703px;
        margin: 0 auto;
        text-align: center;
        @media all and (max-width:${mediaMd}) {
            width:100%;
        } 
    }
}

.GamingZoneItemRow {
    width: 800px;
    margin: 0 auto;
    padding: 90px 0;
    @media all and (max-width:${mediaMd}) {
        width:100%;
    } 
}

.GameingZoneItem {
    .playerPlaceholder{
        background: rgba(6, 43, 73, 0.3);
        border: 2px solid #E6C04E;
        box-sizing: border-box;
        backdrop-filter: blur(19px);
        border-radius: 20px;
        padding: 50px 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        .playerImg{
         height: 350px;
          width:auto;
        }
    }
    .statesState{
        width:100%;
        display: flex;
        align-items:center;
        padding: 15px 20px;
        transform: skew(15deg, 0deg);
        .countPart{
            width:30%;
            background: #fff;
            font-style: normal;
            font-weight: normal;
            font-size: 20px;
            line-height: 19px;
            color: #080806;
            font-family: ${tertiaryFont};
            padding: 15px 0px 15px 25px;
            position: relative;
            span{
                transform: skew(-15deg, 0deg);
                display: inline-block;
            }
            .upArrowAction{
                position: absolute;
                width: 15px;
                top: 10px;
                right: 10px;
                transform: skew(-15deg, 0deg);
                cursor: pointer;
            }
            .DownArrowAction{
                position: absolute;
                width: 15px;
                bottom: 10px;
                right: 15px;
                transform: skew(-15deg, 0deg);
                cursor: pointer;
            }
        }
        .namePart{
            width:70%;
            background: #E6C04E;
            background: #E6C04E;
            font-style: normal;
            font-weight: normal;
            font-size: 20px;
            line-height: 19px;
            margin-bottom:0px;
            color: #1E2833;
            font-family: ${tertiaryFont};
            text-align: center;
            padding: 15px 0px;
            span{
                transform: skew(-15deg, 0deg);
                display: inline-block;
            }
        }
    }
}
.faqsPageWrapper {
    height: 100%;
    background-image: url(${faqsBg});
    background-size: cover;
    background-position:top;
    background-color: rgba(19,19,39,1);
    position: relative;
    .image{
        position: absolute;
        left: 0px;
        top: 20%;
        width: 75px;
        @media all and (max-width:${mediaMd}) {
         display: none;
        } 
    }
}
.AccordionItemWrapper{
    width: 800px;
    margin: 0 auto;
    padding: 90px 0;
    @media all and (max-width:${mediaMd}) {
        width:100%;
    }  
    .accordion{
        background: #292F3F;
        border: 1px solid #586587;
        box-sizing: border-box;
        .accordion-item{
            background: #292F3F;
            padding: 20px 30px 20px 70px;  
            .accordion-header{
                .accordion-button{
                    background: #292F3F; 
                    box-shadow: none;
                    font-family: ${Inter};
                    font-style: normal;
                    font-weight: ${b2};
                    font-size: 25px;
                    color: #FFFFFF;
                    padding-bottom: 10px;
                    span {
                        position: absolute;
                        left: -40px;
                        font-size: 30px;
                    }
                    &:not(.collapsed) {
                        &::after {
                            background-image: url(${closeAcc});
                            transform: scale(1.1);
                        }
	                }
                    &::after {
                        background-image: url(${openAcc});
                        transform: scale(1.3);
                        position: absolute;
                        right: 0px;
                    }
                }
            }
            .accordion-body{
                font-family: ${Inter};
                font-style: normal;
                font-weight: normal;
                font-size: 16px;
                line-height: 22px;
                color: #FFFFFF;
            }
        }
    }
}
.pageWrapper{
    width: 800px;
    margin: 0 auto;
    padding: 90px 0;
    @media all and (max-width:${mediaMd}) {
        width:100%;
    }  
}
.pageWrapperBg {
    height: 100%;
    background-image: url(${pageWrapperImg});
    background-size: cover;
    background-position:top;
    background-color: rgba(19,19,39,1);
    position: relative;
    .image{
        position: absolute;
        left: 0px;
        top: 20%;
        width: 75px;
        @media all and (max-width:${mediaMd}) {
         display: none;
        } 
    }
}
.headWrapper {
    padding-bottom: 5px;
    border-bottom: 1px solid #E8E7E7;
    .heading {
        font-family: ${primaryFont};
        font-style: normal;
        font-weight: ${b2};
        font-size: 30px;
        line-height: 40px;
        margin-bottom: 5px;
        color: #fff;
    }
    .para {
        font-family: ${Inter};
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 20px;
        color: #fff;
    }
}
.paraDecText{
    margin: 15px 0px 0px 0px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    font-family: ${Inter};
    color: #fff;
}
.rowImage{
    img {
        border: 2px solid #586587;
        box-sizing: border-box;
        border-radius: 20px;
        margin-top:20px;
    }
}
.cardItem {
    background: #292F3F;
    border: 1px solid #586587;
    box-sizing: border-box;
    border-radius: 15px;
    @media all and (max-width:${mediaMd}){
        margin-bottom: 15px;
    }
   .cardHead {
       .img {
        border-radius: 15px 15px 0px 0px;
       }
    }  
   .cardBody{
       padding: 21px 30px 28px 20px;
     .head{
        font-family: ${primaryFont};
        font-style: normal;
        font-weight: ${b3};
        font-size: 20px;
        line-height: 27px;
        color: #FFFFFF;
        margin-bottom: 15px;
     }
     .dec {
        font-family: ${Inter};
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 17px;
        color: #FFFFFF;
        margin-bottom: 40px;
    
     }
     .readDetail{
         display: flex;
         align-items:center;
         justify-content:space-between;
        span {
            font-family: ${Inter};
            font-style: normal;
            font-weight: ${b3};
            font-size: 12px;
            line-height: 15px;
            color: #FFFFFF;
        }
     }
   }
 }
 .blogArticleWrapper{
    width: 1200px;
    margin: 0 auto;
    padding: 20px 50px;
    margin-bottom: 100px;
    background: radial-gradient(50% 50% at 50% 50%, rgba(41, 47, 63, 0) 43.75%, #232739 100%);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    @media all and (max-width:${mediaLgPre}) {
        width:100%;
    }  
}
.TempContainer{
    width: 1000px;
    margin: 0 auto;
    padding: 0px 0;
    @media all and (max-width:${mediaLgPre}) {
        width:100%;
    }  
}
.messagesWrapper {
    background: #292F3F;
    border: 1px solid #E6C04E;
    box-sizing: border-box;
    box-shadow: 1px 0px 0px rgba(0, 0, 0, 0.08);
    border-radius: 20px 0px 0px 20px; 
    height:100%; 
}
.headerMessages {
    border-bottom:1px solid #000;
    padding: 25px;
    .items {
        display: flex;
        align-items: center;
        .head {
        font-family: 'Metrophobic', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        color: #FFFFFF;
        }
        .messageCount {
            font-family: 'Metrophobic', sans-serif;
            margin: 0px 10px;
            display: inline-block;
            background: #E6C04E;
            border-radius: 24px;
            font-style: normal;
            font-weight: 600;
            font-size: 12px;
            color: #000000;
            padding: 2px 8px;
        }
        .plus{
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 30px;
            height: 30px;
            background: #E6C04E;
            box-shadow: 0px 0px 15px rgba(65, 62, 189, 0.24);
            border-radius: 30px;
            svg {
                font-size: 20px;
                path {
                    color: #292F3F;
                }
            }
        }
    }
    
}
.searchWrapper{
    position: relative;
    padding: 10px 20px;
   input {
    width: 100%;
    padding: 8px 30px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: #000000;
    background: #fff;
    border-radius: 12px;
    font-family: 'Metrophobic', sans-serif;
    &::focus-visible {
        outline: none;
    }
   }
   svg {
    position: absolute;
    left: 29px;
    top: 20px;
    color: #000000;
    opacity: 0.4;
    font-size: 20px;
   }
}
.messageChat{
  &.send {
    flex-direction: row-reverse;
    .LeftText {
        margin-left:15px;
    }
    .textSpaceWrapper{
        background: #03A9F1;
        color: #fff;
        .textSpace {
            color: #fff; 
        }
    }
  }  
}
.personBox {
    border-radius: 12px;
    padding: 12px;
    display: flex;
    margin: 10px 20px;
    &.active {
        background: rgba(255, 255, 255, 0.12);
    }
    .leftSide{
      width: 48px;
      min-width:48px;
    }
    .LeftText{
      width: 35px;
      min-width:35px;  
    }
    .textSpaceWrapper {
      min-width:calc(250px - 35px);
      position: relative;
      background: #F1F1F1;
      border-radius: 10px;
      padding: 3px 12px; 
      margin-left: 15px;
      .textSpace {
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        color: #000000;
      }  
    }
    .RightSide{
      min-width:calc(100% - 48px);
      position: relative;
      margin-left: 15px;
      .hour{
        font-family: 'Metrophobic', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        color: #FFFFFF;
        position: absolute;
        right: 15px;
        top: -3px;
      }
      .heading{
        font-family: 'Metrophobic', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        color: #FFFFFF;
        margin-bottom: 0px;
      }
      .text{
          display: block;
          font-style: normal;
          font-weight: 600;
          font-size: 12px;
          margin-bottom: 5px;
          color: rgba(255, 255, 255, 0.7);
      }
      .labelDis{
        font-family: 'Metrophobic', sans-serif;
        border: 1px solid #CBD5E0;
        box-sizing: border-box;
        border-radius: 12px;
        padding: 0px 8px 3px 8px;
        display: inline-block;
        color: #718096;
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
      }
      .labelQuestion{
        color: #DD6B20;
        font-family: 'Metrophobic', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        background: #FEEBC8;
        border-radius: 12px;
        padding: 0px 8px 3px 8px;
        display: inline-block;
      }
      .labelWanted{
        color: #38A169;
        font-family: 'Metrophobic', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        background: #C6F6D5;
        border-radius: 12px;
        padding: 0px 8px 3px 8px;
        display: inline-block;
        margin-left: 5px;;
      }
    }
}
.directory{
    background: #292F3F;
    border: 1px solid #E6C04E;
    box-sizing: border-box;
    box-shadow: 1px 0px 0px rgba(0, 0, 0, 0.08);
    border-radius: 0px 20px 20px 0px;
    height:100%;
    .items{
        display: flex;
        justify-content:space-between;
    }
    .labelTeam{
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        color: #FFFFFF;
        margin: 24px 15px 4px;
        font-family: 'Metrophobic', sans-serif;
    }
    .bubble{
        font-family: 'Metrophobic', sans-serif;
        width: 20px;
        height: 20px;
        background: #EDF2F7;
        border-radius: 24px;
        margin-left: 8px;
        padding: 4px 5px;
        color: #000000;
        font-style: normal;
        font-weight: 600;
        font-size: 10px;
        display: inline-block;
    }
}
.ChatBoxWrapper{
    background: #292F3F;
    border: 1px solid #E6C04E;
    box-sizing: border-box;
    height:100%;
   .header {
       padding: 16px 24px;
       border-bottom: 1px solid #000;
       display: flex;
       align-items: center;
       justify-content: space-between;
        .chatSide{
           display: flex;
           align-items:center;
        }
        .leftSide {
            width: 48px;
            min-width:48px;
        }
        .rightSide{
           min-width:calc(100% - 48px);
           position: relative;
           margin-left: 15px; 
        }
        .heading {
            font-family: 'Metrophobic', sans-serif;
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            color: #FFFFFF;
            margin-bottom: 0px;
        }
        .online {
            font-family: 'Metrophobic', sans-serif;
            display: inline-block;
            font-style: normal;
            font-weight: 600;
            font-size: 12px;
            color: #FFFFFF;
            opacity: 0.6;
            svg {
                color: #68D391;
                margin-right: 6px;
                margin-top: 1px;
            }
        }
      .callSide{
        background: #E6C04E;
        border-radius: 8px; 
        padding: 8px 15px;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        color: #292F3F;
        cursor: pointer;
        display: inline-block;
        svg {
            margin-right: 11px;
            margin-top: -4px;
        }
      } 
    }
}
.MessageTypeInput{
    display: flex;
    width:100%;
    padding: 2px 23px;
    margin-bottom: 24px;
    .inputWrapper{
        position: relative;
        width:95%;
    }
   .clipArea{
       width:5%;
       margin-right: 10px;
       .clip {
        font-size: 25px;
        color: #fff;
        cursor: pointer;
       }
   }
   .textInput{
    background: #FFFFFF;
    border: 2px solid #E2E8F0;
    box-sizing: border-box;
    border-radius: 12px;  
    padding: 6px 20px;
    color: #000000;
    font-style: normal;
    font-weight: normal;
    width:100%;
    font-size: 14px;
    color: #000000;
    &::focus-visible {
        outline: none;
    }
   } 
   .Plane{
    position: absolute;
    right: 10px;
    top: 5px;
    font-size: 24px;
    cursor: pointer;
    color: #292F3F;
   }
}
.formContainer{
   width:550px;
   margin: 0 auto;
   @media all and (max-width:${mediaSm}) {
    width: 100%;
   }
   .dec {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 28px;
    color:#fff;
    font-family: 'Metrophobic', sans-serif;
    margin-bottom: 20px;
    padding-bottom:10px;
    border-bottom:1px solid #fff;
   }
   .head-dec {
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 28px;
    color:#fff;
    font-family: ${Inter};
    margin-bottom: 20px;
    padding-bottom:20px;
    padding-top:20px;
    border-bottom:1px solid #fff;
   }
}
.inputWrapper{
    .label{
        font-family: 'Metrophobic', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: #FFFFFF;
        margin-bottom: 14px;
        display: block;
    }
    .inputArea {
        font-family: 'Metrophobic', sans-serif;
        padding: 15px 30px;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #494949;
        width: 100%;
        background: #FFFFFF;
        box-sizing: border-box;
        box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.11);
        border-radius: 6px;
        margin-bottom: 24px;
        &:active, &:focus, &::focus-visible{
            border: 2px solid #E6C04E;
            outline: none !important;
        }
    }
}
.checkbox-label {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: #FFFFFF;
    line-height: 19px;
    margin-left: 30px;
    margin-bottom: 30px;
}
.actionFormBtn{
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
    font-family: ${Inter};
    padding: 15px;
    width: 100%;
    display: block;
    text-align: center;
    background-color: #E6C04E;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.8s ease-in-out;
    &:hover {
        background: #000;
        color: #fff;
    }
}
.footerRoute{
    display: flex;
    align-items:center;
    justify-content:space-between;
}
.alreadyAction{
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    font-family: ${Inter};
    color: #FFFFFF; 
    margin:20px 0px;
    display: inline-block;
    cursor: pointer;
    &.tr {
        text-align: right;
    }
    &.tl {
        text-align: left;
    }

}
.formPageWrapper{
    padding-bottom: 200px;
}
.pt-10{
    padding-top: 100px !important;
}
.dashboardWrapper{
  .dec{
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 28px;
    color:#fff;
    font-family: 'Metrophobic', sans-serif;
    text-align:center;
    width: 700px;
    margin: 0 auto;
    @media all and (max-width:${mediaMd}){
       width: 100%;
    }
  } 
  .rowWrapper {
      width: 800px;
      margin: 0 auto;
    @media all and (max-width:${mediaMd}){
       width: 100%;
    }
  }
  .playerWrapper{
    background: rgba(6, 43, 73, 0.3);
    border: 2px solid #E6C04E;
    box-sizing: border-box;
    backdrop-filter: blur(19px);
    border-radius: 20px;
     img {
        padding: 20px 40px;
        max-width: 100%;
     } 
  } 
  .sub-head{
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 28px;
    color: #FFFFFF;
    font-family: ${Inter};
    margin-bottom:30px;
    margin-top: 20px;
    padding-left: 20px;
  }
  .num-sub{
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 28px;
    color: #FFFFFF;
    font-family: ${Inter};
    margin-bottom:20px;
    padding-left: 20px;
    &.ex-mb{
     margin-bottom: 30px;
    }
  }
  .innerHead{
    text-align:left;
    padding-left: 20px;
  }
  .Withdraw {
    margin-left: 20px; 
  }
}
`;

export default GlobalStyle;
