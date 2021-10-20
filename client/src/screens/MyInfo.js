import React from 'react'
import logo from '../img/kids_first_logo_beta.png'
import my_info_placeholder from '../img/my-info-placeholder.png'



export default function MyInfo() {
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
                            <form class="info-form" method="post" action="/pages/co-parent_info.html">
                                <div class="flex-item">
                                    <div class="mb-2">
                                        <label for="userFirstName" class="form-label">First name</label>
                                        <input type="text" class="form-control" id="userFirstName" required />
                                    </div>
                                    <div class="mb-2">
                                        <label for="userLastName" class="form-label">Last name</label>
                                        <input type="text" class="form-control" id="userLastName" required />
                                    </div>
                                    <div class="mb-2">
                                        <label for="userDob" class="form-label">Date of birth (optional)</label>
                                        <input type="date" class="form-control" id="userDob" />
                                    </div>
                                </div>
                                <div class="profile-nav-buttons">
                                    <a type="button" class="btn" id="back-btn" href="#">Back</a>
                                    <a type="submit" class="btn" id="next-btn"  href="/CoParentInfo">Next step</a>
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
