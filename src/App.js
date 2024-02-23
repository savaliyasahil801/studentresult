import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [name, setname] = useState('');
  let [rno, setrno] = useState('');
  let [sub1, setsub1] = useState('');
  let [sub2, setsub2] = useState('');
  let [sub3, setsub3] = useState('');
  let [sub4, setsub4] = useState('');
  let [sub5, setsub5] = useState('');
  let [arr, setarr] = useState([]);
  let [temp1, settemp1] = useState([]);
  // let [res1, setres1] = useState([]);
  const result = () => {
    let total = parseInt(sub1) + parseInt(sub2) + parseInt(sub3) + parseInt(sub4) + parseInt(sub5);
    let per = parseInt(total) / 5;
    let max = Math.max(sub1, sub2, sub3, sub4, sub5)
    let min = Math.min(sub1, sub2, sub3, sub4, sub5)
    let temp = 0, res, grade;
    if (parseInt(sub1) > 35) {
      temp += 1;
    }
    if (parseInt(sub2) > 35) {
      temp += 1;
    }
    if (parseInt(sub3) > 35) {
      temp += 1;
    }
    if (parseInt(sub4) > 35) {
      temp += 1;
    }
    if (parseInt(sub5) > 35) {
      temp += 1;
    }

    if (temp == 3 || temp == 4) {
      res = 'ATKT';
    }
    else if (temp == 5) {
      res = 'PASS';
    }
    else {
      res = 'FAIL';
    }



    if (per > 90) {
      grade = 'A+';
    }
    else if (per > 80) {
      grade = 'A';
    }
    else if (per > 70) {
      grade = 'B+';
    }
    else if (per > 60) {
      grade = 'B';
    }
    else if (per > 50) {
      grade = 'C';
    } else if (per < 40) {
      grade = 'D';
    }


    // console.log(res1)
    // console.log(temp)
    // console.log(res)

    setarr([...arr, { Name: name, Rno: rno, Sub1: sub1, Sub2: sub2, Sub3: sub3, Sub4: sub4, Sub5: sub5, Total: total, Per: per, Max: max, Min: min, Res: res, Grade: grade }])
    settemp1([...temp1, { Name: name, Rno: rno, Sub1: sub1, Sub2: sub2, Sub3: sub3, Sub4: sub4, Sub5: sub5, Total: total, Per: per, Max: max, Min: min, Res: res, Grade: grade }])


    console.log(arr)
    console.log(temp1)


    setname('')
    setrno('')
    setsub1('')
    setsub2('')
    setsub3('')
    setsub4('')
    setsub5('')


  }
  const perdata = (e) => {
    var newarr = temp1.filter((ele, ind) => {
      return (
        ele.Per >= e
      )
    })
    setarr(newarr);
  }
  const gradedata = (e) => {
    var newarr = temp1.filter((ele, ind) => {
      return ele.Grade == e;
    })
    setarr(newarr);
  }
  const ress = (e) => {
    var newarr = temp1.filter((ele, ind) => {
      return (
        ele.Res == e  
      )
    })
    console.log(newarr)
    setarr(newarr);


  }
  const all = () => {
    var newarr = temp1.filter((ele, ind) => {
      return temp1;
    })
    setarr(newarr);
  }

return (
  <>
    <table className='table1'>
      <tr>
        <td>NAME :-</td>
        <td><input type='text' value={name} onChange={(e) => setname(e.target.value)}></input></td>
      </tr>
      <tr>
        <td>RNO :-</td>
        <td><input type='text' value={rno} onChange={(e) => setrno(e.target.value)}></input></td>
      </tr>
      <tr>
        <td>SUB1 :-</td>
        <td><input type='text' value={sub1} onChange={(e) => setsub1(e.target.value)}></input></td>
      </tr>
      <tr>
        <td>SUB2 :-</td>
        <td><input type='text' value={sub2} onChange={(e) => setsub2(e.target.value)}></input></td>
      </tr>
      <tr>
        <td>SUB3 :-</td>
        <td><input type='text' value={sub3} onChange={(e) => setsub3(e.target.value)}></input></td>
      </tr>
      <tr>
        <td>SUB4 :-</td>
        <td><input type='text' value={sub4} onChange={(e) => setsub4(e.target.value)}></input></td>
      </tr>
      <tr>
        <td>SUB5 :-</td>
        <td><input type='text' value={sub5} onChange={(e) => setsub5(e.target.value)}></input></td>
      </tr>
      <tr><button onClick={result} className='button'>Click here</button></tr>
      <tr>
        <td>
          <select onChange={(e) => { ress(e.target.value) }}>
            <option>Result</option>
            <option value='PASS'>PASS</option>
            <option value='FAIL'>FAIL</option>
            <option value='ATKT'>ATKT</option>
          </select>
        </td>
        <td>
          <select onChange={(e) => { perdata(e.target.value) }}>
            <option>Filter</option>
            <option value='90'>90+</option>
            <option value='80'>80+</option>
            <option value='70'>70+</option>
            <option value='60'>60+</option>
          </select>
        </td>
        <td>
          <select onChange={(e) => { gradedata(e.target.value) }}>
            <option>grade</option>
            <option value='A+'>A+</option>
            <option value='A'>A</option>
            <option value='B+'>B+</option>
            <option value='B'>B</option>
            <option value='C'>C</option>
            <option value='D'>D</option>
          </select>
        </td>
      </tr>

    </table>



    <button onClick={() => { all() }}>all</button>
    <table border={2} className='table'>
      <tr>
        <th>NAME</th>
        <th>RNO</th>
        <th>SUB 1</th>
        <th>SUB 2</th>
        <th>SUB 3</th>
        <th>SUB 4</th>
        <th>SUB 5 </th>
        <th>TOTAL</th>
        <th>PERCENTAGE</th>
        <th>GRADE</th>
        <th>MAXIMUM</th>
        <th>MINIMUM</th>
        <th>RESULT</th>
      </tr>
      {
        arr.map((ele) => {
          return (
            <>
              <tr style={{
                backgroundColor: ele.Res == "PASS" ? "green" : ele.Res == 'ATKT' ? 'blue' : 'red'
              }}>
                <td>{ele.Name}</td>
                <td>{ele.Rno}</td>
                <td>{ele.Sub1}</td>
                <td>{ele.Sub2}</td>
                <td>{ele.Sub3}</td>
                <td>{ele.Sub4}</td>
                <td>{ele.Sub5}</td>
                <td>{ele.Total}</td>
                <td>{ele.Per}</td>
                <td>{ele.Grade}</td>
                <td>{ele.Max}</td>
                <td>{ele.Min}</td>
                <td>{ele.Res}</td>
              </tr>
            </>
          )
        })
      }
    </table>
  </>
);
}

export default App;