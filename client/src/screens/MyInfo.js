import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../img/kids_first_logo_beta.png'
import my_info_placeholder from '../img/my-info-placeholder.png'
import { updateUserInfo } from '../actions/userActions';



export default function MyInfo(props) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');

    const userRegister = useSelector((state) => state.userRegister);
    const { userInfo } = userRegister;
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();

        dispatch(updateUserInfo({ id: userInfo._id, firstName, lastName, dateOfBirth }));
        props.history.push('/CoParentInfo');
    };

    const handleBack = (e) => {
        e.preventDefault();
        props.history.push('/Signup');
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
                        <button class="nav-link active profile-header" id="my_info_tab" data-bs-toggle="tab" data-bs-target="#"
                            type="button" role="tab" aria-controls="my_info" aria-selected="true">My Information</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link disabled profile-header" id="co-parent_info_tab" data-bs-toggle="tab"
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
                    <div class="tab-pane show active" id="my_info" role="tabpanel" aria-labelledby="my_info_tab">
                        <div class="profile-form col-4">
                            <form class="info-form" onSubmit={submitHandler}>
                                <div class="flex-item">
                                    <div class="mb-2">
                                        <label for="userFirstName" class="form-label">First name</label>
                                        <input type="text" class="form-control" id="userFirstName" onChange={(e) => setFirstName(e.target.value)}  />
                                    </div>
                                    <div class="mb-2">
                                        <label for="userLastName" class="form-label">Last name</label>
                                        <input type="text" class="form-control" id="userLastName" onChange={(e) => setLastName(e.target.value)}  />
                                    </div>
                                    <div class="mb-2">
                                        <label for="userDob" class="form-label">Date of birth (optional)</label>
                                        <input type="date" class="form-control" id="userDob" onChange={(e) => setDateOfBirth(e.target.value)} />
                                    </div>
                                </div>
                                <div class="profile-nav-buttons">
                                    <button type="button" class="btn" id="back-btn" onClick={handleBack}>Back</button>
                                    <button type="submit" class="btn" id="next-btn" >Next step</button>
                                </div>
                            </form>
                        </div>
                        <div class="placeholder-photo col-8">
                            <img src={my_info_placeholder} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
