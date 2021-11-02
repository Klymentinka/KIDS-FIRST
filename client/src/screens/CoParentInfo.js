import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../img/kids_first_logo_beta.png'
import coparent_info_placeholder from '../img/coparent-info-placeholder.png'
import { registerCoparent } from '../actions/userActions';

export default function CoParentInfo(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [is_co_parent, setIs_co_parent] = useState(true);
  const [invite_link, setInvite_link] = useState('');
  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo } = userRegister;
  const dispatch = useDispatch();
  const createBy  = userInfo._id;
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(registerCoparent(firstName, lastName, email, is_co_parent,createBy));
    props.history.push('/ChildInfo');

  };

  const handleBack = (e) => {
    e.preventDefault();
    props.history.push('/MyInfo');
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
            <button class="nav-link active profile-header" id="co-parent_info_tab" data-bs-toggle="tab"
              data-bs-target="#profile" type="button" role="tab" aria-controls="co-parent_info"
              aria-selected="false">Co-parent Information</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link disabled profile-header" id="child_info_tab" data-bs-toggle="tab"
              data-bs-target="#contact" type="button" role="tab" aria-controls="child_info" aria-selected="false">Child
              Information</button>
          </li>
        </ul>
        <div class="tab-content" id="accountInfoTabContent">
          <div class="tab-pane show active" id="co-parent_info" role="tabpanel" aria-labelledby="co-parent_info_tab">
            <div class="profile-form col-4">
              <form class="info-form" onSubmit={submitHandler}>
                <div class="flex-item">
                  <div class="mb-2">
                    <label for="co-parentFirstName" class="form-label">First name</label>
                    <input type="text" class="form-control" id="co-parentFirstName" onChange={(e) => setFirstName(e.target.value)}
 />
                  </div>
                  <div class="mb-2">
                    <label for="co-parentLastName" class="form-label">Last name</label>
                    <input type="text" class="form-control" id="co-parentLastName" onChange={(e) => setLastName(e.target.value)}  />
                  </div>

                  <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="co-parentCheck" value="true" onChange={(e) => setInvite_link(e.target.value)}
                    />
                    <label class="form-check-label" for="co-parentCheck">Invite my co-parent</label>
                  </div>


                  {invite_link === 'true' && <div class="mb-2 co-parent-email-input">
                    <label for="co-parentEmail" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="co-parentEmail" onChange={(e) => setEmail(e.target.value)}
/>
                  </div>}
                </div>
                <div class="profile-nav-buttons">
                  <button type="button" class="btn" id="back-btn" onClick={handleBack}> Back</button>
                  <button type="submit" class="btn" id="next-btn">Next step</button>
                </div>
              </form>
            </div>
            <div class="placeholder-photo col-8">
              <img src={coparent_info_placeholder} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
