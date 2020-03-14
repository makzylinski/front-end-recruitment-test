/*
 *
 *  Web Starter Kit
 *  Copyright 2015 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */
/* eslint-env browser */
(function() {
  'use strict';

  // Check to make sure service workers are supported in the current browser,
  // and that the current page is accessed from a secure origin. Using a
  // service worker from an insecure origin will trigger JS console errors. See
  // http://www.chromium.org/Home/chromium-security/prefer-secure-origins-for-powerful-new-features

  const isLocalhost = Boolean(window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
  );

  if (
    'serviceWorker' in navigator
    && (window.location.protocol === 'https:' || isLocalhost)
  ) {
    navigator.serviceWorker.register('service-worker.js')
      .then(function(registration) {
        // updatefound is fired if service-worker.js changes.
        registration.onupdatefound = function() {
          // updatefound is also fired the very first time the SW is installed,
          // and there's no need to prompt for a reload at that point.
          // So check here to see if the page is already controlled,
          // i.e. whether there's an existing service worker.
          if (navigator.serviceWorker.controller) {
            // The updatefound event implies that registration.installing is set
            // https://slightlyoff.github.io/ServiceWorker/spec/service_worker/index.html#service-worker-container-updatefound-event
            const installingWorker = registration.installing;

            installingWorker.onstatechange = function() {
              switch (installingWorker.state) {
              case 'installed':
                // At this point, the old content will have been purged and the
                // fresh content will have been added to the cache.
                // It's the perfect time to display a "New content is
                // available; please refresh." message in the page's interface.
                break;

              case 'redundant':
                throw new Error('The installing ' +
                    'service worker became redundant.');

              default:
                  // Ignore
              }
            };
          }
        };
      }).catch(function(e) {
        console.error('Error during service worker registration:', e);
      });
  }

  // Your custom JavaScript goes here

  // Task 1 
  const baconButton = document.querySelector('button');
  const baconImage = document.querySelector('img');
  const baconSection = document.querySelectorAll('#overview section:nth-child(2)');

  baconButton.addEventListener('click', e => {
    e.preventDefault();
    baconSection[0].appendChild(baconImage.cloneNode(true))
  })
})();

// Task 3 
const form = document.getElementById('form');


document.getElementById('first-name').addEventListener('keyup', () => {
  const regex = new RegExp(/^[a-zA-z]+$/);
  const name = document.getElementById('first-name');
  if(regex.test(name.value) && name.value.length >= 2) {
    document.querySelector('#nameError').classList.add('legitInput')
    checkValid();
  } else {
    document.querySelector('#nameError').classList.remove('legitInput')
    document.querySelector('#nameError').classList.add('errorInput')
  }
})

document.getElementById('last-name').addEventListener('keyup', () => {
  const regex = new RegExp(/^[a-zA-z]+$/);
  const lastname = document.getElementById('last-name');
  if(regex.test(lastname.value) && lastname.value.length >= 2) {
    document.querySelector('#lastNameError').classList.add('legitInput')
    checkValid();
  } else {
    document.querySelector('#lastNameError').classList.remove('legitInput')
    document.querySelector('#lastNameError').classList.add('errorInput')
  }
})

document.getElementById('email').addEventListener('keyup', () => {
  const regex = new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  const email = document.getElementById('email');
  if(regex.test(email.value) && email.value.length >= 2) {
    document.querySelector('#emailError').classList.add('legitInput')
    checkValid();
  } else {
    document.querySelector('#emailError').classList.remove('legitInput')
    document.querySelector('#emailError').classList.add('errorInput')
  }
})

document.getElementById('postal-code').addEventListener('keyup', () => {
  const regex = new RegExp(/^[0-9]+$/);
  const postalCode = document.getElementById('postal-code');
  if(regex.test(postalCode.value) && postalCode.value.length === 5) {
    document.querySelector('#postalError').classList.add('legitInput')
    checkValid();
  } else {
    document.querySelector('#postalError').classList.remove('legitInput')
    document.querySelector('#postalError').classList.add('errorInput')
  }
})

document.getElementById('phone-number').addEventListener('keyup', () => {
  const regex = new RegExp(/^[+]?(\d{1,2})?[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{3}$/);
  const phoneNumber = document.getElementById('phone-number');
  if(regex.test(phoneNumber.value)) {
    document.querySelector('#numberError').classList.add('legitInput')
    checkValid();
  } else {
    document.querySelector('#numberError').classList.remove('legitInput')
    document.querySelector('#numberError').classList.add('errorInput')
  }
})

document.getElementById('credit-card').addEventListener('keyup', () => {
  const regex = new RegExp(/^\b\d{4}[ -]?\d{4}[ -]?\d{4}[ -]?\d{4}\b$/);
  const creditCard = document.getElementById('credit-card');
  if(regex.test(creditCard.value)) {
    document.querySelector('#cardError').classList.add('legitInput')
    checkValid();
  } else {
    document.querySelector('#cardError').classList.remove('legitInput')
    document.querySelector('#cardError').classList.add('errorInput')
  }
})

document.getElementById('security-code').addEventListener('keyup', (e) => {
  const security = document.getElementById('security-code');
  if(e.target.value.length === 3  && typeof e.target.value.length === 'number') {
    document.querySelector('#securityError').classList.add('legitInput')
    checkValid();
  } else {
    document.querySelector('#securityError').classList.remove('legitInput')
    document.querySelector('#securityError').classList.add('errorInput')
  }
})

document.getElementById('expiration-date').addEventListener('keyup', () => {
  const regex = new RegExp(/^(0[1-9]|1[0-2])\/[0-9]{2}$/);
  const expDate = document.getElementById('expiration-date');
  if(regex.test(expDate.value)) {
    document.querySelector('#expError').classList.add('legitInput')
    checkValid();
  } else {
    document.querySelector('#expError').classList.remove('legitInput')
    document.querySelector('#expError').classList.add('errorInput')
  }
})

function checkValid()
{
    const f = document.forms['form'].elements;
    let cansubmit = true;

    for (var i = 0; i < f.length-1; i++) {
        if (f[i].value.length == 0) cansubmit = false;
        else {
          document.querySelector('.purchase-button').disabled = 'disabled';
      }
    }

    document.querySelector('.purchase-button').disabled = !cansubmit;
}
