import InputFiled from "../../Coustom/CoustomInputFiled";
import React, { useState, MouseEventHandler, useEffect } from "react";
import axios, { AxiosResponse, AxiosError } from "axios";
import CustomHook from "../../hooks/customHook";
import { Link } from "react-router-dom";
import { clickOptions } from "@testing-library/user-event/dist/click";
import { useFormik } from "formik";
const EmployeForm = () => {
  const [reloadKey, setReloadKey] = useState<number>(0);
  const [name, setName] = useState<string | undefined>("");
  const [email, setEmail] = useState<string | undefined>("");
  const [age, setAge] = useState<string | undefined>("");
  const [mobile, setMobile] = useState<string | undefined>("");
  const [gender, setGender] = useState<string | undefined>("");
  const [password, setPassword] = useState<string | undefined>("");
  const [isEditMode, setIsEditMode] = useState<boolean | undefined>(false);
  const [isEditId, setIsEditId] = useState<number | undefined>(0);
  const { data, errorValue, getDataFromUrl } = CustomHook(
    "http://localhost:4000/Employee/Get"
  );
  console.log("api data", data);
  console.log("api get data error", errorValue);
  const handlsubmit = async () => {
    console.log(
      `name: ${name} && email: ${email} && password: ${password} && mobile: ${mobile} && gender:${gender}`
    );

    try {
      if (name && email && password && mobile && gender && age) {
        const dataPass = {
          Name: name,
          Email: email,
          Age: age,
          Password: password,
          Mobile: mobile,
          Gender: gender,
        };
        const postResponse: AxiosResponse = await axios.post(
          "http://localhost:4000/Employee/create",
          dataPass
        );
        if (postResponse.status === 201) {
          alert("Data Successfully Inserted");
          //return update data when user submit form
          getDataFromUrl();
          //close
          console.log(postResponse.data);
         
        }else{
          alert("something went wrong")
        }

        setName("");
        setEmail("");
        setAge("");
        setMobile("");
        setGender("");
        setPassword("");
      } else {
        alert("All Filed is Required");
      }
    } catch (error: unknown) {
      const axiosError = error as AxiosError;
      console.log(axiosError);
    }
  };
  interface ClickParams {
    uId: number;
    action: string;
  }
  var userId: number = 0;
  const handlEdit = async (param: ClickParams) => {
    try {
      setIsEditId(param.uId);
      console.log(`userId value: ${isEditId}`);
      setIsEditMode(true);
      const updateResponse = await axios.get(
        `http://localhost:4000/Employee/Get?id=${param.uId}&action=${param.action}`
      );
      console.log("update data", updateResponse.data);
      setName(updateResponse.data["EmpName"]);
      setEmail(updateResponse.data["EmpEmail"]);
      setAge(updateResponse.data["EmpAge"]);
      setMobile(updateResponse.data["EmpMobile"]);
      setGender(updateResponse.data["EmpGender"]);
      setPassword(updateResponse.data["EmpPassword"]);
    } catch (error: unknown) {
      const axiosError = error as AxiosError;
      console.log(axiosError);
    }
  };

  const handlUpdate = async () => {
    try {
      if (isEditId && name && email && password && mobile && gender && age) {
        const dataPass = {
          id: isEditId,
          Name: name,
          Email: email,
          Age: age,
          Password: password,
          Mobile: mobile,
          Gender: gender,
        };
        const putResponse: AxiosResponse = await axios.put(
          "http://localhost:4000/Employee/update",
          dataPass
        );
          if(putResponse.status===200){
            alert(putResponse.data);
            
            //return update data when user submit form
            getDataFromUrl();
            //close
            
          }else{
            alert("something went wrong")
          }
        
        setName("");
        setEmail("");
        setAge("");
        setMobile("");
        setGender("");
        setPassword("");
        setIsEditMode(false);
        setIsEditId(0);
      } else {
        alert("All Filed is Required");
      }
    } catch (error: unknown) {
      const axiosError = error as AxiosError;
      console.log(axiosError);
    }
  };

  const handlDelete = async (delId: number) => {
    try {
      if (delId) {
        const deleteResponse: AxiosResponse = await axios.delete(
          `http://localhost:4000/Employee/delete?id=${delId}`
        );
        console.log("delete response", deleteResponse);
        if (deleteResponse.status === 200) {
          alert("data is deleted successfully");
          //return update data when user submit form
          getDataFromUrl();
          //close
        } else {
          alert("something went wrong happened");
        }
      } else {
        alert("All Filed is Required");
      }
    } catch (error: unknown) {
      const axiosError = error as AxiosError;
      console.log(axiosError);
    }
  };
  // useEffect(()=>{
  //   if(reloadKey){
  //     CustomHook("http://localhost:4000/Employee/Get");
  //     setReloadKey(false)
  //   }

  // },[reloadKey])
  return (
    <div>
      {/* <h1>{reloadKey}</h1> */}
      <div className="place-content-center mt-40">
        <div className="grid grid-cols-2 md:grid-cols-2 sm:grid-col-1">
          <div className="mt-5">
            <label className="capitalize text-2xl">Name</label>
            <InputFiled
              type="text"
              placeholder="Enter A Name"
              value={name}
              onChange={(
                event: React.ChangeEvent<HTMLInputElement> | undefined
              ) => setName(event?.target.value)}
              className="p-2 w-1/3"
            />
          </div>
          <div className="">
            <label className="capitalize text-2xl">Email</label>
            <InputFiled
              type="email"
              placeholder="Enter A Email"
              className="p-2 w-1/3"
              value={email}
              onChange={(
                event: React.ChangeEvent<HTMLInputElement> | undefined
              ) => setEmail(event?.target.value)}
            />
          </div>
          <div className="mt-5">
            <label className="capitalize text-2xl">age</label>
            <InputFiled
              type="text"
              placeholder="Enter A age"
              className="p-2 w-1/3"
              value={age}
              onChange={(
                event: React.ChangeEvent<HTMLInputElement> | undefined
              ) => setAge(event?.target.value)}
            />
          </div>
          <div className="">
            <label className="capitalize text-2xl">gender</label>
            <InputFiled
              type="text"
              placeholder="Enter A gender"
              className="p-2 w-1/3"
              value={gender}
              onChange={(
                event: React.ChangeEvent<HTMLInputElement> | undefined
              ) => setGender(event?.target.value)}
            />
          </div>
          <div className="mt-5">
            <label className="capitalize text-2xl">mobile</label>
            <InputFiled
              type="text"
              placeholder="Enter A mobile"
              className="p-2 w-1/3"
              value={mobile}
              onChange={(
                event: React.ChangeEvent<HTMLInputElement> | undefined
              ) => setMobile(event?.target.value)}
            />
          </div>
          <div className="">
            <label className="capitalize text-2xl">password</label>
            <InputFiled
              type="password"
              placeholder="Enter A password"
              className="p-2 w-1/3"
              value={password}
              onChange={(
                event: React.ChangeEvent<HTMLInputElement> | undefined
              ) => setPassword(event?.target.value)}
            />
          </div>
        </div>
        <div>
          {isEditMode === true ? (
            <InputFiled
              type="submit"
              value="update"
              className="p-3 bg-slate-950 text-cyan-200 w-40 cursor-pointer"
              onClick={handlUpdate}
            />
          ) : (
            <InputFiled
              type="submit"
              value="submit"
              className="p-3 bg-slate-950 text-cyan-200 w-40 cursor-pointer"
              onClick={handlsubmit}
            />
          )}
        </div>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-20">
        <table className="text-gray-500 dark:text-gray-400 w-full bg-blue-600 m-10">
          <thead>
            <tr>
              <th className="px-3 py-3">Name</th>
              <th className="px-3 py-3">Email</th>
              <th className="px-3 py-3">Age</th>
              <th className="px-3 py-3">Gender</th>
              <th className="px-3 py-3">Mobile</th>
              <th className="px-3 py-3">Password</th>
              <th className="px-3 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((element) => (
              <tr className="">
                <td className="px-3 py-3">{element.EmpName}</td>
                <td className="px-3 py-3">{element.EmpEmail}</td>
                <td className="px-3 py-3">{element.EmpAge}</td>
                <td className="px-3 py-3">{element.EmpGender}</td>
                <td className="px-3 py-3">{element.EmpMobile}</td>
                <td className="px-3 py-3">{element.EmpPassword}</td>
                <td>
                  {/* <Link to="update" className="px-4 mx-4 py-2 bg-blue-950 rounded-xl">update</Link>
                  <Link to="delete" className="px-4 py-2 bg-red-900 rounded-xl">delete</Link> */}
                  <button
                    className="px-4 mx-4 py-2 bg-blue-950 rounded-xl"
                    onClick={() =>
                      handlEdit({ uId: element._id, action: "updateGet" })
                    }
                  >
                    edit
                  </button>
                  <button
                    className="px-4 py-2 bg-red-900 rounded-xl"
                    onClick={() => handlDelete(element._id)}
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeForm;
