import'./App.scss'
import {Slider} from "@mui/material";
import { createTheme } from '@mui/material/styles';
import React from "react";

let theme = createTheme({
    palette: {
        primary: {
            main: '#FF9514',
        },
    },
});



function App() {
const [value,setValue]=React.useState(3000000)

    const [price,setPrice]=React.useState(3000000)
    const [percent,setPercent]=React.useState()
    const [term,setTerm] = React.useState(1)
    const ChangeValuePrice = (event,price)=>{
        setPrice(price)
    }

    const ChangeValueTerm = (event,term)=>{
        setTerm(term)

    }
    const ChangeValuePercent = (event,price)=>{

        setPercent(price * 0.13 )
    }



    const changeValue=(event,value)=>{
        setValue(value)
    }
  return (
    <div className="App">

        <h1>Рассчитайте стоимость автомобиля в лизинг</h1>
        <div className='main_box'>
        <div>
            <p>Стоимость автомобиля</p>
            <div className='main_box_price'>
                <p>{price}</p> <span>₽</span>
            </div>
            <div style={{width:"379px",marginLeft:"24px",marginTop:'-15px'}}>
            <Slider
                value={price}
                onChange={ChangeValuePrice}
                sx={{color:theme.palette.primary.main,height:'2px'}}
                max={6000000}
                step={100000}
                min={1000000}
                defaultValue={3000000}
            />
            </div>


        </div>
        <div>
            <p>Первоначальный взнос</p>
            <div className='main_box_price'>
                <p>{percent}</p> <div className='main_box_price_percent'> <span style={{fontSize:'20px',color:'#575757'}}>13%</span></div>
            </div>
            <div style={{width:"379px",marginLeft:"24px",marginTop:'-15px'}}>
                <Slider
                    value={percent}
                    onChange={ChangeValuePercent}
                    sx={{color:theme.palette.primary.main,height:'2px'}}
                    max={6000000}
                    step={100000}
                    min={1000000}
                    defaultValue={3000000}
                />
            </div>
        </div>
        <div>
            <p>Срок лизинга</p>
            <div className='main_box_price'>
                <p>{term}</p> <span>₽</span>
            </div>
            <div style={{width:"379px",marginLeft:"24px",marginTop:'-15px'}}>
                <Slider
                    value={term}
                    onChange={ChangeValueTerm}
                    sx={{color:theme.palette.primary.main,height:'2px'}}
                    max={60}
                    step={1}
                    min={1}
                    defaultValue={5}
                />
            </div>
        </div>

        </div>
        <div className="main_box_sum" >
            <div><p>Сумма договора лизинга</p>
                <span>4 467 313 ₽</span></div>


            <div></div>
        </div>






    </div>
  );
}

export default App;
