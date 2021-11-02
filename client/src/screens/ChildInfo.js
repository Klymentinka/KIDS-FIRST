import React, { useState } from 'react';
import child_info_placeholder from '../img/child-info-placeholder-1.png'
import logo from '../img/kids_first_logo_beta.png'
import { useDispatch, useSelector } from 'react-redux';
import { registerChild } from '../actions/userActions';

export default function ChildInfo(props) {
  const [firstName, setFirstName] = useState('');
  const [is_child, setIs_child] = useState(true);
  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo } = userRegister;
  const dispatch = useDispatch();
  const createBy = userInfo._id;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(registerChild(firstName,is_child, createBy));
    props.history.push('/dashboard');
  };

  const handleBack = (e) => {
    e.preventDefault();
    props.history.push('/CoParentInfo');
  };

  return (
    <div>
      <header>
        <div class="site-header">
          <img src={logo} alt="" />
          <div class="header-title">Welcome...</div>
        </div>
      </header>
      <div class="profile-tabs">
        <ul class="nav nav-tabs nav-fill" id="accountInfoTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link disabled profile-header" id="my_info_tab" data-bs-toggle="tab" data-bs-target="#"
              type="button" role="tab" aria-controls="my_info" aria-selected="true">My Information</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link disabled profile-header" id="co-parent_info_tab" data-bs-toggle="tab"
              data-bs-target="#profile" type="button" role="tab" aria-controls="co-parent_info"
              aria-selected="false">Co-parent Information</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link active profile-header" id="child_info_tab" data-bs-toggle="tab"
              data-bs-target="#contact" type="button" role="tab" aria-controls="child_info" aria-selected="false">Child
              Information</button>
          </li>
        </ul>
        <div class="tab-content" id="accountInfoTabContent">
          <div class="tab-pane show active" id="child_info" role="tabpanel" aria-labelledby="child_info_tab">
            <div class="profile-form col-4">
              <form class="info-form" onSubmit={submitHandler}>
                <div class="flex-item">
                  <div class="mb-2">
                    <label for="childFirstName" class="form-label">Child name</label>
                    <input type="text" class="form-control" id="childFirstName" onChange={(e) => setFirstName(e.target.value)}  />
                  </div>
                  {/* <div class="mb-2">
                <label for="childLastName" class="form-label">Last name</label>
                <input type="text" class="form-control" id="childLastName" />
              </div> */}
                  <div class="mb-3 form-check">
                    <input type="button" class="form-check-input" id="childCheck" />
                    <label class="form-check-label" for="childCheck">Add another child</label>
                  </div>
                </div>
                <div class="profile-nav-buttons">
                  <button type="button" class="btn" id="back-btn" onClick={handleBack}>Back</button>
                  <button type="submit" class="btn" id="next-btn" >Next step</button>
                </div>
              </form>
            </div>
            <div class="placeholder-photo col-8">
              <img src={child_info_placeholder} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
