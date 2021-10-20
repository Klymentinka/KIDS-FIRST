import React from 'react'
import logo from '../img/kids_first_logo_beta.png'
import coparent_info_placeholder from '../img/coparent-info-placeholder.png'

export default function CoParentInfo() {
    return (
        <div>
             <header>
    <div class="site-header">
      <img src={logo} alt=""/>
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
          <form class="info-form" method="post" action="/pages/child_info.html">
            <div class="flex-item">
              <div class="mb-2">
                <label for="co-parentFirstName" class="form-label">First name</label>
                <input type="text" class="form-control" id="co-parentFirstName" required/>
              </div>
              <div class="mb-2">
                <label for="co-parentLastName" class="form-label">Last name</label>
                <input type="text" class="form-control" id="co-parentLastName" required/>
              </div>
              <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="co-parentCheck"/>
                <label class="form-check-label" for="co-parentCheck">Invite my co-parent</label>
              </div>
              <div class="mb-2 co-parent-email-input">
                <label for="co-parentEmail" class="form-label">Email address</label>
                <input type="email" class="form-control" id="co-parentEmail"/>
              </div>
            </div>
            <div class="profile-nav-buttons">
              <a type="button" class="btn" id="back-btn" href="/MyInfo"> Back</a>
              <a type="button" class="btn" id="next-btn" href="/ChildInfo">Next step</a>
            </div>
          </form>
        </div>
        <div class="placeholder-photo col-8">
          <img src={coparent_info_placeholder} alt=""/>
        </div>
      </div>
    </div>
  </div> 
        </div>
    )
}
