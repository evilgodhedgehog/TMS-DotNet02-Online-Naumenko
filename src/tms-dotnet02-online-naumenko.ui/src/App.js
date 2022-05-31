import { Typography } from "@mui/material";
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Administration from "./pages/Administration";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SinglePostPage from "./pages/SinglePostPage";

function App() {

    function checkLogin() {
        const login = window.localStorage.getItem('token');

        if (login === 'admin') {

        }
    }

  return (
    <div className="app">
      <header>
        
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route exact path="/:date/:title/:id" element={<SinglePostPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/administration" element={<Administration />} onEnter={checkLogin}/>
      </Routes>
      <footer className="mt-3 d-flex align-items-center justify-content-center">
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <a color="inherit" href="/">
                News Portal
            </a>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
      </footer>
      <div className="d-none svg-sprite">
          <svg>
          <symbol viewBox="0 0 40 40" id="icon-views_small" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 29.844c-5.01 0-10.162-3.116-14.507-8.774a1.757 1.757 0 0 1 .001-2.141C9.838 13.272 14.99 10.156 20 10.156s10.162 3.116 14.507 8.774a1.757 1.757 0 0 1-.001 2.141C30.162 26.728 25.01 29.844 20 29.844zM7.83 20c2.348 2.938 6.769 7.344 12.17 7.344 5.402 0 9.823-4.407 12.17-7.344-2.348-2.938-6.769-7.344-12.17-7.344-5.402 0-9.823 4.406-12.17 7.344zm24.694.452l.001.002zm-25.05-.906l.002.002z"></path>
              <circle cx="20" cy="20" r="4.5"></circle>
          </symbol>
          <symbol viewBox="0 0 40 40" id="icon-share" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.13 8.876v15.039h1.75V8.92l3.01 3.054 1.246-1.229L21.13 6.68a1.43 1.43 0 0 0-1.127-.555 1.347 1.347 0 0 0-1.131.543l-4.007 3.98 1.233 1.24z"></path>
              <path d="M27.937 14.115h-3.538v1.75h3.538a.233.233 0 0 1 .239.227v13.806a.233.233 0 0 1-.239.227H12.063a.233.233 0 0 1-.239-.227V16.092a.233.233 0 0 1 .239-.227h3.521v-1.75h-3.521a1.985 1.985 0 0 0-1.989 1.977v13.806a1.985 1.985 0 0 0 1.989 1.977h15.874a1.985 1.985 0 0 0 1.989-1.977V16.092a1.985 1.985 0 0 0-1.989-1.977z"></path>
          </symbol>
          <symbol viewBox="0 0 40 40" id="icon-more" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="19.667" r="1.999"></circle>
              <circle cx="27.998" cy="19.667" r="1.999"></circle>
              <circle cx="12.002" cy="19.667" r="1.999"></circle>
              </symbol>
          <symbol
              viewBox="0 0 40 40"
              id="social-facebook"
              xmlns="http://www.w3.org/2000/svg"
          >
              <path d="M31 20.002C31 13.925 26.076 9 20 9S9 13.925 9 20.002c0 5.492 4.022 10.043 9.281 10.869v-7.689h-2.793v-3.18h2.793v-2.424c0-2.757 1.642-4.28 4.155-4.28 1.204 0 2.462.214 2.462.214v2.708h-1.387c-1.367 0-1.792.849-1.792 1.719v2.063h3.05l-.487 3.18h-2.563v7.689C26.979 30.045 31 25.494 31 20z"></path>
          </symbol>
          <symbol
              viewBox="0 0 40 40"
              id="social-instagram"
              xmlns="http://www.w3.org/2000/svg"
          >
              <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M30.674 17.02c.026 1.697.026 3.821 0 6.373a11.048 11.048 0 0 1-.419 3.307 5.344 5.344 0 0 1-4.315 3.746 17.97 17.97 0 0 1-2.957.241c-1.672.026-3.788.026-6.35 0-1.117.03-2.231-.11-3.307-.415a5.343 5.343 0 0 1-3.759-4.308 17.766 17.766 0 0 1-.242-2.957c-.026-1.69-.026-3.814 0-6.373a10.99 10.99 0 0 1 .415-3.31 5.347 5.347 0 0 1 4.316-3.75c.98-.143 1.968-.224 2.958-.243.147-.005 1.147-.008 3-.008v-.03c2.634.046 4.07.073 4.311.08a7.085 7.085 0 0 1 3.538.918 5.286 5.286 0 0 1 2.57 3.77c.156.977.236 1.966.24 2.956l.001.002zm-4.979-4c.345-.011.678.12.921.364.246.24.381.57.373.912.007.346-.13.68-.377.921a1.218 1.218 0 0 1-.907.378 1.256 1.256 0 0 1-.915-.388 1.282 1.282 0 0 1 .905-2.188zM28.8 19.84a568.057 568.057 0 0 1-.139 4.893l.006.003a3.965 3.965 0 0 1-1.435 3.086 3.9 3.9 0 0 1-2.089.81c-.82.08-1.638.126-2.454.135a79.61 79.61 0 0 1-1.4.013h-2.7c-.444-.003-.867-.008-1.267-.016a19.034 19.034 0 0 1-2.844-.2 3.7 3.7 0 0 1-2.163-1.143 3.8 3.8 0 0 1-.929-2.279c-.087-1.006-.133-2.24-.139-3.7-.005-1.73.018-3.667.068-5.81.013-.515.09-1.026.23-1.522a3.458 3.458 0 0 1 3.03-2.66c.897-.122 1.801-.185 2.706-.187 1.981-.031 3.793-.031 5.437 0a18 18 0 0 1 2.864.223c.814.13 1.56.531 2.114 1.14.543.632.868 1.422.927 2.253.062.62.107 1.43.134 2.43v2.531h.043zm-8.75-5.322a5.289 5.289 0 0 1 2.73.737 5.508 5.508 0 0 1-5.559 9.511 5.36 5.36 0 0 1-1.989-2.01 5.549 5.549 0 0 1-.726-2.8 5.284 5.284 0 0 1 .74-2.737 5.39 5.39 0 0 1 2.016-1.978 5.536 5.536 0 0 1 2.788-.724v.001zm3.24 6.86a3.557 3.557 0 0 1-3.295 2.195 3.432 3.432 0 0 1-2.514-1.052 3.556 3.556 0 1 1 5.032-5.025 3.557 3.557 0 0 1 .776 3.882z"
              ></path>
          </symbol>
          <symbol
              viewBox="0 0 40 40"
              id="social-odnoklassniki"
              xmlns="http://www.w3.org/2000/svg"
          >
              <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.99 20.134a6.47 6.47 0 0 1-2.384-.443 6.194 6.194 0 0 1-1.956-1.208 5.68 5.68 0 0 1-1.313-1.81 5.202 5.202 0 0 1-.483-2.207 5.28 5.28 0 0 1 .483-2.239 6.075 6.075 0 0 1 1.313-1.844 5.928 5.928 0 0 1 1.956-1.24 6.467 6.467 0 0 1 2.384-.44 6.608 6.608 0 0 1 2.423.443 5.644 5.644 0 0 1 1.941 1.24 6.263 6.263 0 0 1 1.288 1.844c.323.702.488 1.466.483 2.24a5.199 5.199 0 0 1-.483 2.205 5.732 5.732 0 0 1-3.229 3.02 6.609 6.609 0 0 1-2.423.44zm0-8.487a3.1 3.1 0 0 0-2.134.814 2.585 2.585 0 0 0-.91 2c.004.758.336 1.478.91 1.972a3.145 3.145 0 0 0 4.292 0c.57-.497.899-1.216.9-1.972.01-.767-.319-1.5-.9-2a3.115 3.115 0 0 0-2.158-.814zm7.117 10.584a1.15 1.15 0 0 0-.017-1.384l.001-.004a1.518 1.518 0 0 0-.924-.717 1.811 1.811 0 0 0-1.666.475 5.28 5.28 0 0 1-1.44.717c-.48.157-.97.28-1.466.367-.378.067-.76.11-1.143.13l-.467.015-.467-.016a9.139 9.139 0 0 1-1.144-.129c-.493-.086-.98-.207-1.457-.362a5.27 5.27 0 0 1-1.44-.717 1.755 1.755 0 0 0-1.644-.475 1.6 1.6 0 0 0-.95.717c-.296.418-.283.98.032 1.384a7.878 7.878 0 0 0 1.6 1.257c.692.41 1.45.698 2.238.853a21.2 21.2 0 0 0 2.045.322l-.966.918a99.62 99.62 0 0 1-1.949 1.8c-.644.59-1.186 1.095-1.626 1.513a1.34 1.34 0 0 0-.435.967c0 .351.16.683.435.9l.161.161a1.486 1.486 0 0 0 1.965 0l3.613-3.378c.706.633 1.372 1.25 2 1.852a37.629 37.629 0 0 0 1.683 1.53c.27.24.62.371.982.37.358.003.703-.13.966-.37l.177-.162a1.16 1.16 0 0 0 .42-.9 1.365 1.365 0 0 0-.42-.967l-3.623-3.317-1-.918a16.317 16.317 0 0 0 2.093-.362 8.472 8.472 0 0 0 2.19-.813 7.068 7.068 0 0 0 1.643-1.257z"
              ></path>
          </symbol>
          <symbol
              viewBox="0 0 40 40"
              id="social-skype"
              xmlns="http://www.w3.org/2000/svg"
          >
              <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M27.796 12.568a10.47 10.47 0 0 1 2.937 9.042 6.33 6.33 0 0 1-8.711 8.712 10.475 10.475 0 0 1-11.978-11.98 6.332 6.332 0 0 1 8.712-8.713c3.31-.524 6.67.569 9.04 2.94zm-4.385 13.665a4.33 4.33 0 0 0 1.945-1.494 3.689 3.689 0 0 0 .67-2.159 3.42 3.42 0 0 0-.385-1.69c-.256-.46-.621-.85-1.063-1.134a6.75 6.75 0 0 0-1.651-.764 23.144 23.144 0 0 0-2.16-.57 38.06 38.06 0 0 1-1.361-.338 4.318 4.318 0 0 1-.806-.317 1.852 1.852 0 0 1-.62-.479 1 1 0 0 1-.22-.646c.02-.439.27-.835.657-1.042a3.136 3.136 0 0 1 1.755-.441 2.8 2.8 0 0 1 1.7.4c.382.308.692.696.909 1.136.147.28.337.536.563.758.219.173.495.258.774.239.353.008.692-.135.933-.393.237-.233.372-.552.374-.884a2.3 2.3 0 0 0-.3-1.081 3.412 3.412 0 0 0-.924-1.053 4.946 4.946 0 0 0-1.584-.8 7.55 7.55 0 0 0-2.255-.3 8.071 8.071 0 0 0-2.84.455 4 4 0 0 0-1.855 1.3 3.13 3.13 0 0 0-.642 1.94c-.024.692.191 1.37.609 1.922.436.537 1 .954 1.64 1.215.822.339 1.676.598 2.548.774.749.16 1.352.31 1.8.453.404.116.776.325 1.087.609.277.264.426.636.41 1.018a1.563 1.563 0 0 1-.77 1.328 3.5 3.5 0 0 1-2.031.538 3.382 3.382 0 0 1-1.468-.265 2.265 2.265 0 0 1-.861-.677 5.123 5.123 0 0 1-.576-1.03 2.115 2.115 0 0 0-.543-.81 1.191 1.191 0 0 0-.8-.279 1.333 1.333 0 0 0-.951.355c-.24.221-.375.532-.373.857.02.627.234 1.233.61 1.735a4.459 4.459 0 0 0 1.574 1.416 7.206 7.206 0 0 0 3.458.736 7.749 7.749 0 0 0 3.023-.538z"
              ></path>
          </symbol>
          <symbol
              viewBox="0 0 40 40"
              id="social-telegram"
              xmlns="http://www.w3.org/2000/svg"
          >
              <path d="M28.19 11.119c-.037.013-.073.029-.11.043l-13.607 5.245c-2.1.81-4.2 1.62-6.3 2.433-.331.11-.639.282-.906.507a.56.56 0 0 0 .092 1c.185.105.383.187.59.242 1.54.48 3.078.965 4.621 1.439a.455.455 0 0 1 .341.34c.156.517.332 1.029.5 1.545.492 1.516.983 3.032 1.472 4.549a.55.55 0 0 0 .572.428 1.375 1.375 0 0 0 1.058-.454c.777-.767 1.568-1.522 2.342-2.293a.307.307 0 0 1 .48-.037c1.571 1.177 3.153 2.338 4.73 3.507.236.185.509.318.8.39a.92.92 0 0 0 1.09-.461 2.63 2.63 0 0 0 .276-.821c1.046-4.925 2.09-9.85 3.131-14.775.147-.572.259-1.153.335-1.74a1.039 1.039 0 0 0-1.508-1.087zm-2.61 3.7c-.183.173-.372.34-.557.508-2.951 2.662-5.904 5.322-8.857 7.98a.93.93 0 0 0-.32.673c-.09 1.108-.2 2.214-.3 3.32a.132.132 0 0 1-.08.14c-.148-.45-.292-.9-.438-1.341-.44-1.35-.878-2.7-1.328-4.048a.334.334 0 0 1 .16-.471c3.643-2.292 7.282-4.586 10.918-6.882.181-.132.39-.22.61-.257.115-.013.247-.018.307.1.06.118-.04.206-.116.277z"></path>
          </symbol>
          <symbol
              viewBox="0 0 40 40"
              id="social-tiktok"
              xmlns="http://www.w3.org/2000/svg"
          >
              <path d="M28.381 9H11.619A2.622 2.622 0 0 0 9 11.62V28.38a2.622 2.622 0 0 0 2.62 2.62H28.38a2.622 2.622 0 0 0 2.62-2.62V11.619A2.622 2.622 0 0 0 28.38 9zm-2.092 9.598a3.925 3.925 0 0 1-3.645-1.756v6.043a4.467 4.467 0 1 1-4.467-4.467c.093 0 .184.009.276.014v2.201c-.091-.01-.181-.027-.276-.027a2.28 2.28 0 1 0 0 4.559c1.26 0 2.372-.992 2.372-2.252l.021-10.263h2.106a3.922 3.922 0 0 0 3.615 3.502v2.446"></path>
          </symbol>
          <symbol
              viewBox="0 0 40 40"
              id="social-tiktok_alt"
              xmlns="http://www.w3.org/2000/svg"
          >
              <path d="M17.076 20.823c.129 0 .251.023.376.038v-2.995c-.125-.007-.249-.019-.376-.019a6.076 6.076 0 1 0 6.077 6.077v-8.222a5.339 5.339 0 0 0 4.959 2.39h.003v-3.328A5.336 5.336 0 0 1 23.197 10h-2.864l-.03 13.963c0 1.713-1.513 3.063-3.226 3.063a3.101 3.101 0 0 1 0-6.203z"></path>
          </symbol>
          <symbol
              viewBox="0 0 40 40"
              id="social-twitter"
              xmlns="http://www.w3.org/2000/svg"
          >
              <path d="M8.485 28.082a13.217 13.217 0 0 0 20.331-11.74 9.428 9.428 0 0 0 2.318-2.4 9.32 9.32 0 0 1-2.669.73 4.664 4.664 0 0 0 2.044-2.57 9.288 9.288 0 0 1-2.95 1.127 4.65 4.65 0 0 0-7.919 4.24 13.191 13.191 0 0 1-9.578-4.857 4.652 4.652 0 0 0 1.437 6.2 4.613 4.613 0 0 1-2.1-.582v.059a4.649 4.649 0 0 0 3.72 4.556 4.667 4.667 0 0 1-2.1.08 4.652 4.652 0 0 0 4.341 3.227 9.316 9.316 0 0 1-5.77 1.989 9.404 9.404 0 0 1-1.105-.06z"></path>
          </symbol>
          <symbol
              viewBox="0 0 40 40"
              id="social-viber"
              xmlns="http://www.w3.org/2000/svg"
          >
              <path fillRule="evenodd" clipRule="evenodd" d="M30.037 16.124a7.267 7.267 0 0 0-1.982-3.84 10.856 10.856 0 0 0-.74-.55 6.957 6.957 0 0 0-1.466-.7 15.27 15.27 0 0 0-2.3-.61 16.869 16.869 0 0 0-3.2-.265l-.937-.03c-.773.009-1.545.071-2.31.186-.958.14-1.903.359-2.825.655a6.743 6.743 0 0 0-2.544 1.436 6.434 6.434 0 0 0-1.686 2.872 14.673 14.673 0 0 0-.53 3.871c0 .71.02 1.543.062 2.5.044.966.217 1.921.515 2.841a7.114 7.114 0 0 0 1.5 2.575 6.201 6.201 0 0 0 2.98 1.733v2.25l.063.468c.02.286.222.526.5.593a.849.849 0 0 0 .9-.25c.27-.27.572-.583.905-.937.187-.207.4-.446.64-.717.24-.27.442-.52.609-.75a18.53 18.53 0 0 0 4.51-.093c1.24-.208 1.931-.333 2.076-.375.188-.067.542-.167 1.062-.3a5.147 5.147 0 0 0 1.654-.828 6.73 6.73 0 0 0 1.655-1.808c.58-.97.932-2.058 1.03-3.184.347-2.239.3-4.52-.141-6.743zm-1.498.593c.352 1.906.39 3.857.109 5.775a6.218 6.218 0 0 1-.858 2.62 5.142 5.142 0 0 1-1.358 1.451 4.3 4.3 0 0 1-1.358.64c-.426.104-.712.177-.858.218-.146.041-.75.156-1.811.344-1.27.195-2.56.237-3.84.124l-.343.438c-.25.29-.536.629-.858 1.014-.323.384-.652.764-.984 1.14-.333.374-.582.645-.75.811a.561.561 0 0 1-.155.11.236.236 0 0 1-.187.015.2.2 0 0 1-.094-.125.81.81 0 0 1-.031-.25V27.36a5 5 0 0 1-2.481-1.467 5.82 5.82 0 0 1-1.2-2.185 9.05 9.05 0 0 1-.36-2.4c-.01-.812-.014-1.51-.014-2.092.007-1.09.154-2.176.437-3.23a5.266 5.266 0 0 1 1.405-2.42 5.444 5.444 0 0 1 2.138-1.2 13.848 13.848 0 0 1 2.4-.53c.647-.087 1.299-.134 1.952-.142l.81.032c.916-.01 1.83.056 2.733.2.672.11 1.335.271 1.982.484a7.1 7.1 0 0 1 1.28.562c.228.131.447.277.655.437a5.949 5.949 0 0 1 1.639 3.31zm-3.262 3.621a.275.275 0 0 1-.2-.078.238.238 0 0 1-.078-.17 6.942 6.942 0 0 0-.406-2.28 4.474 4.474 0 0 0-1.092-1.686 5.267 5.267 0 0 0-1.671-1.093 5.827 5.827 0 0 0-2.044-.4.268.268 0 0 1-.25-.25.335.335 0 0 1 .078-.219.223.223 0 0 1 .172-.093h.03a6.45 6.45 0 0 1 2.217.437c.686.27 1.312.673 1.842 1.186.54.54.96 1.187 1.233 1.9.294.8.437 1.648.422 2.5a.159.159 0 0 1-.047.171.275.275 0 0 1-.206.075zm-4.25 2.4h-.25l.006.004a4.456 4.456 0 0 1-1.768-.88 6.305 6.305 0 0 1-1.124-1.2 4.435 4.435 0 0 1-.577-1.077l-.156-.468.03-.25a.39.39 0 0 1 .188-.343l.53-.437a.883.883 0 0 0 .25-.453.806.806 0 0 0-.124-.67 6.973 6.973 0 0 0-.3-.5 12.791 12.791 0 0 1-.328-.53 10.832 10.832 0 0 0-.437-.563l-.312-.375a.9.9 0 0 0-.484-.265 1.056 1.056 0 0 0-.577.078c-.188.127-.37.257-.546.39-.187.145-.36.307-.515.484-.101.14-.195.287-.281.437a1.213 1.213 0 0 0-.156.406v.156a1.195 1.195 0 0 0 .062.375c.084.208.209.504.375.89.166.384.415.878.749 1.482.199.38.418.75.655 1.108.211.32.44.627.687.921.104.146.224.301.359.453.135.152.276.307.42.452l.126.125c.149.149.305.29.469.422l.215.177c.08.067.154.128.222.182.27.208.572.426.905.655.35.24.715.459 1.092.656.604.333 1.104.588 1.5.764.294.138.596.258.905.36l.187.062c.06.02.124.031.188.031h.062l.03-.03a1.61 1.61 0 0 0 .454-.142c.159-.074.31-.163.453-.265.177-.156.339-.328.483-.515.133-.173.253-.355.359-.546v-.032a.893.893 0 0 0 .11-.56.9.9 0 0 0-.266-.47l-.374-.312a41.92 41.92 0 0 0-.593-.437 12.48 12.48 0 0 0-.515-.343 5.515 5.515 0 0 0-.484-.28.828.828 0 0 0-.687-.126.886.886 0 0 0-.468.25l-.406.53a.48.48 0 0 1-.343.22zm3.059-3.215a.223.223 0 0 1-.094.171.293.293 0 0 1-.187.078.268.268 0 0 1-.281-.28 3.22 3.22 0 0 0-.188-1.3 3.513 3.513 0 0 0-.655-1.078 2.808 2.808 0 0 0-1.015-.734 3.83 3.83 0 0 0-1.39-.3.21.21 0 0 1-.186-.094.38.38 0 0 1-.062-.218.226.226 0 0 1 .078-.188.317.317 0 0 1 .2-.062 5.103 5.103 0 0 1 1.592.36c.472.192.89.498 1.217.89.334.353.589.773.749 1.232.173.49.25 1.008.227 1.527l-.005-.004zm-1.917-.313a.314.314 0 0 0 .2.063l.036.003a.224.224 0 0 0 .187-.078.266.266 0 0 0 .063-.172 2.167 2.167 0 0 0-.531-1.467A1.894 1.894 0 0 0 20.748 17a.333.333 0 0 0-.22.078.254.254 0 0 0-.093.2.187.187 0 0 0 .063.2c.06.052.138.08.218.078.374-.006.735.14 1 .406.247.298.38.674.375 1.061a.224.224 0 0 0 .078.187z"></path>
          </symbol>
          <symbol
              viewBox="0 0 40 40"
              id="social-vkontakte"
              xmlns="http://www.w3.org/2000/svg"
          >
              <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.7 9.7C8 11.35 8 14.1 8 19.5v1c0 5.4 0 8.15 1.7 9.8 1.65 1.7 4.4 1.7 9.8 1.7h1c5.4 0 8.15 0 9.8-1.7 1.7-1.65 1.7-4.4 1.7-9.8v-1c0-5.4 0-8.15-1.7-9.8C28.65 8 25.9 8 20.5 8h-1c-5.4 0-8.1.05-9.8 1.7zm3.05 5.8h1.75c.45 0 .6.2.85.75.85 2.45 2.3 4.65 2.9 4.65.2 0 .3-.1.3-.65v-2.6c-.031-.754-.3-1.073-.495-1.306-.115-.138-.205-.245-.205-.394 0-.2.15-.4.45-.4h2.75c.35 0 .5.2.5.65v3.45c0 .35.15.5.25.5.2 0 .4-.15.8-.55 1.25-1.45 2.15-3.6 2.15-3.6.1-.25.3-.5.75-.5h1.7c.55 0 .65.3.55.65-.2 1-2.35 4-2.35 4-.2.3-.25.45 0 .8.083.104.234.25.412.422.25.242.554.535.788.828.8.85 1.35 1.55 1.5 2.05.15.5-.1.75-.6.75h-1.75c-.465 0-.7-.256-1.237-.843a25.03 25.03 0 0 0-.813-.857c-1.05-1-1.5-1.15-1.75-1.15-.35 0-.45.1-.45.6v1.55c0 .45-.15.7-1.25.7-1.85 0-3.9-1.1-5.35-3.2-2.15-3.05-2.75-5.35-2.75-5.8 0-.25.1-.5.6-.5z"
              ></path>
          </symbol>
          <symbol
              viewBox="0 0 40 40"
              id="social-whatsapp"
              xmlns="http://www.w3.org/2000/svg"
          >
              <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20.208 8.637a10.9 10.9 0 0 0-9.336 16.532l-1.97 5.848 6.037-1.931a10.9 10.9 0 1 0 5.269-20.449zm-.001 19.977a9.022 9.022 0 0 1-4.991-1.5l-3.487 1.113 1.13-3.367a9.072 9.072 0 1 1 7.348 3.755zm3.246-7.575c.252.102 1.594.827 1.867.977l.143.077c.194.103.324.172.374.268.06.45-.013.908-.211 1.316a2.82 2.82 0 0 1-1.93 1.253c-.087.005-.16.02-.236.035-.363.073-.767.155-3.077-.857a11.426 11.426 0 0 1-4.595-4.378 5.412 5.412 0 0 1-1.028-2.92 3.118 3.118 0 0 1 1.07-2.286 1.02 1.02 0 0 1 .755-.321c.095.004.191.013.284.022.087.009.17.017.249.02h.063c.157-.004.36-.01.545.489l.245.667c.226.615.49 1.333.535 1.433a.512.512 0 0 1 0 .488 1.884 1.884 0 0 1-.295.454 9.678 9.678 0 0 0-.146.162c-.097.11-.195.221-.29.31-.143.131-.295.278-.143.563.391.73.888 1.4 1.476 1.985a7.645 7.645 0 0 0 2.185 1.465c.274.152.439.133.607-.047.168-.18.724-.785.92-1.057.198-.273.38-.22.633-.117z"
              ></path>
          </symbol>
          <symbol
              viewBox="0 0 40 40"
              id="social-youtube"
              xmlns="http://www.w3.org/2000/svg"
          >
              <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M31.313 15.464a3.382 3.382 0 0 0-3.382-3.383H12.068a3.381 3.381 0 0 0-3.381 3.383v9.072a3.38 3.38 0 0 0 3.381 3.383h15.863a3.38 3.38 0 0 0 3.382-3.383v-9.072zm-13.576 8.8v-8.52l6.467 4.253-6.467 4.268z"
              ></path>
          </symbol>
          <symbol
              viewBox="0 0 40 40"
              id="social-zen"
              xmlns="http://www.w3.org/2000/svg"
          >
              <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.6 10.6C12.2 9 15.3 9 19.9 9c-.2 4.8-.3 7.1-2.1 8.9-1.7 1.7-3.9 1.8-8.8 2 0-4.4 0-7.7 1.6-9.3zm18.8 0c1.6 1.6 1.6 4.8 1.5 9.3-4.8-.2-7-.3-8.8-2.1-1.7-1.7-1.8-3.9-2-8.8 4.6 0 7.7 0 9.3 1.6zm1.5 9.5c-4.8.1-7 .3-8.8 2-1.7 1.8-1.9 4-2 8.8 4.5 0 7.6 0 9.2-1.6 1.6-1.5 1.6-4.8 1.6-9.2zm-13 2.1c1.7 1.7 1.8 3.9 2 8.8-4.6 0-7.7 0-9.2-1.5-1.6-1.6-1.6-4.9-1.6-9.3 4.8.1 7 .3 8.8 2z"
              ></path>
          </symbol>
          </svg>
      </div>
    </div>
  );
}

export default App;