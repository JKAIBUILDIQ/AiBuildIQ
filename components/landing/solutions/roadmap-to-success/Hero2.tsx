"use client";
import Link from "next/link";
import React, { useState } from 'react'


const btTSVG = (
    <svg width="234" height="139" viewBox="0 0 234 139" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M148.614 118.624L233.046 61.7201L148.614 4.81641V27.2047H0L53.2268 61.7201L0 96.2354H148.614V118.624Z" fill="#004F8F" />
        <path d="M99.3563 84.5293C111.559 84.5293 121.452 74.6367 121.452 62.4336C121.452 50.2305 111.559 40.3379 99.3563 40.3379C87.1532 40.3379 77.2607 50.2305 77.2607 62.4336C77.2607 74.6367 87.1532 84.5293 99.3563 84.5293Z" fill="white" />
        <path d="M99.3564 73.4804C105.458 73.4804 110.404 68.5342 110.404 62.4326C110.404 56.3311 105.458 51.3848 99.3564 51.3848C93.2548 51.3848 88.3086 56.3311 88.3086 62.4326C88.3086 68.5342 93.2548 73.4804 99.3564 73.4804Z" fill="#004F8F" />
        <path d="M99.3574 62.4336V133.568" stroke="#004F8F" stroke-width="1.29" stroke-miterlimit="10" />
        <path d="M119.879 138.196C113.715 135.288 106.819 133.66 99.5397 133.66C92.772 133.66 86.3336 135.069 80.517 137.593C79.95 137.831 79.4013 138.087 78.8525 138.361" stroke="#004F8F" stroke-width="1.29" stroke-miterlimit="10" />
        <path d="M99.3558 0.9375L109.763 13.8327H88.9482L99.3558 0.9375Z" fill="#004F8F" />
    </svg>
)

const ttBSVG = (
    <svg width="234" height="139" viewBox="0 0 234 139" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M149.242 133.624L233.674 76.7201L149.242 19.8164V42.2047H0.62793L51.294 76.7201L0.62793 111.235H149.242V133.624Z" fill="#1E70B3" />
        <path d="M100.955 98.8164C113.158 98.8164 123.05 88.9238 123.05 76.7207C123.05 64.5176 113.158 54.625 100.955 54.625C88.7519 54.625 78.8594 64.5176 78.8594 76.7207C78.8594 88.9238 88.7519 98.8164 100.955 98.8164Z" fill="white" />
        <path d="M100.954 87.7676C107.056 87.7676 112.002 82.8213 112.002 76.7197C112.002 70.6182 107.056 65.6719 100.954 65.6719C94.8525 65.6719 89.9062 70.6182 89.9062 76.7197C89.9062 82.8213 94.8525 87.7676 100.954 87.7676Z" fill="#1E70B3" />
        <path d="M100.954 76.7194V5.60352" stroke="#1E70B3" stroke-width="1.29" stroke-miterlimit="10" />
        <path d="M121.478 0.957589C115.314 3.86588 108.418 5.49379 101.138 5.49379C94.3706 5.49379 87.9322 4.08537 82.1157 1.5612C81.5486 1.32341 80.9999 1.06734 80.4512 0.792969" stroke="#1E70B3" stroke-width="1.29" stroke-miterlimit="10" />
        <path d="M100.955 138.232L111.362 125.318H90.5654L100.955 138.232Z" fill="#1E70B3" />
    </svg>
)


const Assistance = [
    {
        title: "Implement your Proof of Concept",
        svg: (
            <svg width="67" height="67" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M60.1411 52.912C70.9183 38.1164 67.6608 17.3854 52.8653 6.60814C38.0698 -4.16916 17.339 -0.911645 6.56174 13.884C-4.21548 28.6796 -0.95801 49.4105 13.8375 60.1878C28.633 70.9651 49.3638 67.7076 60.1411 52.912Z" fill="#004F8F" />
                <path d="M33.3567 58.0925C47.0042 58.0925 58.0678 47.0289 58.0678 33.3812C58.0678 19.7335 47.0042 8.66992 33.3567 8.66992C19.7091 8.66992 8.64551 19.7335 8.64551 33.3812C8.64551 47.0289 19.7091 58.0925 33.3567 58.0925Z" fill="white" />
                <path d="M19.842 26.6516H18.8768C17.6825 26.696 17.6834 28.4099 18.8768 28.4538H19.842C21.0363 28.4095 21.0354 26.6955 19.842 26.6516ZM43.0056 28.4538H43.9707C45.165 28.4094 45.1641 26.6955 43.9707 26.6516H43.0056C41.8113 26.696 41.8122 28.4099 43.0056 28.4538ZM31.4238 19.7675C31.9214 19.7675 32.3249 19.364 32.3249 18.8664V17.9012C32.2805 16.707 30.5666 16.7079 30.5227 17.9012V18.8664C30.5227 19.364 30.9261 19.7675 31.4238 19.7675ZM23.3746 20.1596L22.4095 19.1944C22.0576 18.8426 21.4871 18.8425 21.1352 19.1944C20.7833 19.5463 20.7833 20.1168 21.1352 20.4687L22.1003 21.4339C22.4522 21.7858 23.0227 21.7856 23.3746 21.4339C23.7265 21.082 23.7265 20.5115 23.3746 20.1596ZM40.7473 21.4339L41.7124 20.4687C42.0643 20.1168 42.0643 19.5463 41.7124 19.1944C41.3606 18.8426 40.79 18.8425 40.4381 19.1944L39.473 20.1596C39.1211 20.5115 39.1211 21.082 39.473 21.4339C39.8249 21.7858 40.3955 21.7857 40.7473 21.4339ZM31.4878 40.5819V38.7392C31.4878 37.8444 31.944 37.0426 32.6469 36.571C32.4835 35.7406 32.7279 34.8511 33.3605 34.2184L35.1941 32.3849C35.8022 31.7699 36.6997 31.4992 37.5468 31.6711C38.0185 30.9683 38.8201 30.5123 39.7148 30.5123H40.0451C40.0849 25.7361 36.1994 21.8237 31.4238 21.8259C23.0018 22.1059 20.0962 31.7508 25.745 37.035C26.797 38.22 27.6279 39.1561 27.6272 40.5818H31.4878V40.5819ZM41.0112 38.5238C40.1776 38.5238 39.4994 39.202 39.4994 40.0357C39.5753 42.0385 42.4473 42.038 42.523 40.0357C42.523 39.202 41.8448 38.5238 41.0112 38.5238Z" fill="#004F8F" />
                <path d="M48.0253 37.9386L47.041 37.8157C46.9819 37.6553 46.9164 37.4973 46.8446 37.3422L47.4538 36.5588C47.5745 36.4036 47.6344 36.2096 47.6221 36.0133C47.6099 35.817 47.5264 35.6319 47.3874 35.4928L45.5538 33.6593C45.4147 33.5202 45.2296 33.4367 45.0333 33.4245C44.8371 33.4123 44.6431 33.4722 44.4878 33.5929L43.7045 34.2021C43.5493 34.1303 43.3914 34.0648 43.231 34.0056L43.1081 33.0214C43.0837 32.8262 42.9889 32.6467 42.8414 32.5165C42.694 32.3863 42.5041 32.3145 42.3074 32.3145H39.7145C39.5178 32.3144 39.3279 32.3863 39.1805 32.5165C39.033 32.6466 38.9382 32.8262 38.9138 33.0214L38.7909 34.0056C38.6305 34.0647 38.4725 34.1302 38.3173 34.202L37.534 33.5928C37.3787 33.4721 37.1847 33.4122 36.9885 33.4245C36.7922 33.4367 36.6071 33.5202 36.4681 33.6592L34.6345 35.4928C34.4954 35.6318 34.4119 35.8169 34.3997 36.0132C34.3875 36.2095 34.4474 36.4035 34.5681 36.5587L35.1774 37.342C35.1056 37.4972 35.04 37.6552 34.9809 37.8156L33.9966 37.9385C33.8014 37.9629 33.6219 38.0577 33.4917 38.2051C33.3615 38.3526 33.2897 38.5425 33.2897 38.7392V41.332C33.2897 41.5287 33.3615 41.7187 33.4917 41.8661C33.6219 42.0135 33.8014 42.1084 33.9966 42.1327L34.9808 42.2556C35.0399 42.4161 35.1055 42.5741 35.1773 42.7293L34.5681 43.5125C34.4474 43.6678 34.3875 43.8618 34.3997 44.058C34.4119 44.2543 34.4954 44.4394 34.6345 44.5784L36.4681 46.412C36.6071 46.5511 36.7922 46.6346 36.9885 46.6468C37.1847 46.659 37.3787 46.5991 37.534 46.4784L38.3174 45.8692C38.4725 45.941 38.6305 46.0065 38.7909 46.0656L38.9138 47.0498C38.9382 47.245 39.033 47.4246 39.1805 47.5548C39.3279 47.6849 39.5178 47.7568 39.7145 47.7568H42.3074C42.5041 47.7568 42.694 47.6849 42.8414 47.5547C42.9889 47.4246 43.0837 47.245 43.1081 47.0498L43.231 46.0656C43.3914 46.0065 43.5494 45.941 43.7045 45.8692L44.4878 46.4783C44.6431 46.5991 44.8371 46.6589 45.0333 46.6467C45.2296 46.6345 45.4147 46.551 45.5538 46.4119L47.3874 44.5783C47.5265 44.4393 47.61 44.2542 47.6222 44.0579C47.6344 43.8616 47.5745 43.6676 47.4538 43.5124L46.8445 42.7291C46.9163 42.5739 46.9819 42.416 47.041 42.2556L48.0252 42.1327C48.2204 42.1083 48.4 42.0135 48.5302 41.866C48.6603 41.7186 48.7322 41.5287 48.7322 41.332V38.7393C48.7322 38.5426 48.6603 38.3527 48.5302 38.2053C48.4 38.0578 48.2205 37.963 48.0253 37.9386ZM41.0109 43.3497C39.1836 43.3497 37.6969 41.863 37.6969 40.0357C37.8635 35.6453 44.159 35.6465 44.3249 40.0358C44.3249 41.8631 42.8382 43.3497 41.0109 43.3497ZM32.6467 43.5004C32.2357 43.224 31.9112 42.8371 31.7108 42.3841H27.627V43.4779C27.627 45.1634 28.8921 46.5579 30.5224 46.7644V46.8559C30.5667 48.0502 32.2806 48.0493 32.3246 46.8559V46.7644C32.8316 46.7 33.3167 46.5185 33.7416 46.2343L33.3602 45.8529C32.7276 45.2202 32.4832 44.3308 32.6467 43.5004Z" fill="#004F8F" />
            </svg>
        )
    },
    {
        title: "Enhance Your Model",
        svg: (
            <svg width="68" height="67" viewBox="0 0 68 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M58.9162 55.5912C70.9588 41.8059 69.5461 20.8682 55.7608 8.82552C41.9756 -3.21714 21.038 -1.80445 8.99546 11.9809C-3.04712 25.7662 -1.63443 46.7039 12.1508 58.7466C25.936 70.7892 46.8736 69.3765 58.9162 55.5912Z" fill="#1E70B3" />
                <path d="M33.9553 58.5027C47.6029 58.5027 58.6664 47.4391 58.6664 33.7914C58.6664 20.1437 47.6029 9.08008 33.9553 9.08008C20.3077 9.08008 9.24414 20.1437 9.24414 33.7914C9.24414 47.4391 20.3077 58.5027 33.9553 58.5027Z" fill="white" />
                <path d="M21.4902 42.9955L32.0278 32.458L35.2857 35.7159L24.7482 46.2535L21.4902 42.9955ZM37.2309 27.2576L33.0709 31.4182L36.3293 34.6767L40.4899 30.5166L37.2309 27.2576ZM28.8074 31.4516L30.5973 28.1788L33.8701 26.3889L30.5973 24.599L28.8074 21.3262L27.0175 24.599L23.7447 26.3889L27.0175 28.1788L28.8074 31.4516ZM42.1431 29.8827L43.6557 27.117L46.4214 25.6044L43.6557 24.0919L42.1431 21.3262L40.6305 24.0919L37.8648 25.6044L40.6305 27.117L42.1431 29.8827ZM42.1431 32.7008L40.6305 35.4665L37.8648 36.979L40.6305 38.4916L42.1431 41.2572L43.6557 38.4916L46.4214 36.979L43.6557 35.4665L42.1431 32.7008Z" fill="#1E70B3" />
            </svg>
        )
    },
    {
        title: "Develop a Tailored Policy  Optimization Strategy",
        svg: (
            <svg width="67" height="67" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M60.2582 52.9316C71.0355 38.1359 67.778 17.405 52.9825 6.62767C38.187 -4.14962 17.4561 -0.89208 6.6789 13.9035C-4.09832 28.6992 -0.840823 49.4301 13.9547 60.2074C28.7502 70.9847 49.481 67.7272 60.2582 52.9316Z" fill="#004F8F" />
                <path d="M33.4552 58.0925C47.1028 58.0925 58.1664 47.0289 58.1664 33.3812C58.1664 19.7335 47.1028 8.66992 33.4552 8.66992C19.8077 8.66992 8.74414 19.7335 8.74414 33.3812C8.74414 47.0289 19.8077 58.0925 33.4552 58.0925Z" fill="white" />
                <path d="M41.8635 29.0984C42.6837 30.5805 43.1515 32.2835 43.1515 34.0939C43.1515 39.8011 38.5083 44.4443 32.8011 44.4443C27.0938 44.4443 22.4507 39.8011 22.4507 34.0939C22.4507 28.3868 27.0938 23.7436 32.8011 23.7436C34.566 23.7436 36.2289 24.188 37.6843 24.9702L39.8158 22.8388C37.7318 21.5345 35.3202 20.8359 32.801 20.8359C29.2597 20.8359 25.9303 22.215 23.4262 24.7191C20.922 27.2232 19.543 30.5526 19.543 34.094C19.543 37.6353 20.922 40.9647 23.4262 43.4688C25.9303 45.973 29.2597 47.352 32.801 47.352C36.3423 47.352 39.6717 45.973 42.1758 43.4688C44.68 40.9647 46.0591 37.6353 46.0591 34.094C46.0591 31.5318 45.3368 29.0808 43.9891 26.9728L41.8635 29.0984Z" fill="#004F8F" />
                <path d="M33.8149 31.6445C32.8605 31.2534 31.7185 31.4413 30.9445 32.2155C29.9117 33.2482 29.9117 34.914 30.9445 35.9388C31.9768 36.9711 33.6426 36.9711 34.6672 35.9388C35.4418 35.1641 35.6293 34.0223 35.2382 33.0684L42.8015 25.5051L44.0611 25.6692L47.3928 22.3371L44.8745 22.0011L44.538 19.4824L41.2059 22.8222L41.3705 24.0813L33.8149 31.6445Z" fill="#004F8F" />
                <path d="M37.7331 33.2312C37.783 33.5168 37.8081 33.8062 37.8081 34.0961C37.8081 36.8569 35.5621 39.103 32.8012 39.103C30.0405 39.103 27.7943 36.857 27.7943 34.0961C27.7943 31.3354 30.0404 29.0893 32.8012 29.0893C33.044 29.0893 33.2827 29.107 33.5163 29.1406L35.86 26.7968C34.9185 26.4008 33.885 26.1816 32.8012 26.1816C28.4372 26.1816 24.8867 29.7321 24.8867 34.0961C24.8867 38.4602 28.4372 42.0107 32.8012 42.0107C37.1653 42.0107 40.7158 38.4602 40.7158 34.0961C40.7158 32.9656 40.477 31.89 40.0481 30.9163L37.7331 33.2312Z" fill="#004F8F" />
            </svg>
        )
    },
    {
        title: "Deploy and Evaluate",
        svg: (
            <svg width="68" height="67" viewBox="0 0 68 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M34.071 66.9335C52.3756 66.9335 67.2143 52.0947 67.2143 33.79C67.2143 15.4853 52.3756 0.646484 34.071 0.646484C15.7665 0.646484 0.927734 15.4853 0.927734 33.79C0.927734 52.0947 15.7665 66.9335 34.071 66.9335Z" fill="#1E70B3" />
                <path d="M34.0715 58.5027C47.7191 58.5027 58.7826 47.4391 58.7826 33.7914C58.7826 20.1437 47.7191 9.08008 34.0715 9.08008C20.4239 9.08008 9.36035 20.1437 9.36035 33.7914C9.36035 47.4391 20.4239 58.5027 34.0715 58.5027Z" fill="white" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M43.133 23.2926C43.7812 23.2926 44.3098 23.8212 44.3098 24.4694V46.122C44.3098 46.7701 43.7812 47.2988 43.133 47.2988H25.0108C24.3626 47.2988 23.834 46.7702 23.834 46.122V24.4694C23.834 23.8213 24.3626 23.2926 25.0108 23.2926H27.5067V24.5783C27.5067 25.576 28.3177 26.387 29.3155 26.387H38.8284C39.8261 26.387 40.6372 25.576 40.6372 24.5783V23.2926H43.133ZM34.3747 37.111H39.9337C40.2863 37.111 40.5721 36.8252 40.5721 36.4726C40.5721 36.12 40.2863 35.8342 39.9337 35.8342H34.3747C34.0221 35.8342 33.7363 36.12 33.7363 36.4726C33.7363 36.8252 34.0221 37.111 34.3747 37.111ZM34.3747 42.7066H39.9337C40.2863 42.7066 40.5721 42.4208 40.5721 42.0682C40.5721 41.7156 40.2863 41.4298 39.9337 41.4298H34.3747C34.0221 41.4298 33.7363 41.7156 33.7363 42.0682C33.7363 42.4208 34.0221 42.7066 34.3747 42.7066ZM34.3747 31.5154H39.9337C40.2863 31.5154 40.5721 31.2295 40.5721 30.8769C40.5721 30.5244 40.2863 30.2385 39.9337 30.2385H34.3747C34.0221 30.2385 33.7363 30.5244 33.7363 30.8769C33.7363 31.2296 34.0221 31.5154 34.3747 31.5154ZM27.4683 31.4272L28.4369 32.3958C28.6862 32.6451 29.0904 32.6451 29.3397 32.3958L29.3431 32.3922L31.6699 30.2807C31.9302 30.0438 31.9491 29.6408 31.7122 29.3805C31.4754 29.1202 31.0723 29.1012 30.812 29.3381L28.9104 31.0639L28.371 30.5245C28.1217 30.2753 27.7175 30.2753 27.4682 30.5245C27.219 30.7738 27.219 31.178 27.4683 31.4272ZM27.4683 42.6185L28.4369 43.5871C28.6862 43.8363 29.0904 43.8363 29.3397 43.5871L29.3431 43.5835L31.6699 41.472C31.9302 41.2351 31.9491 40.832 31.7122 40.5717C31.4754 40.3115 31.0723 40.2925 30.812 40.5294L28.9104 42.2551L28.371 41.7158C28.1217 41.4665 27.7175 41.4665 27.4682 41.7158C27.219 41.965 27.219 42.3692 27.4683 42.6185ZM27.4683 37.0229L28.4369 37.9915C28.6862 38.2407 29.0904 38.2407 29.3397 37.9915L29.3431 37.9879L31.6699 35.8764C31.9302 35.6395 31.9491 35.2364 31.7122 34.9761C31.4754 34.7159 31.0723 34.6969 30.812 34.9337L28.9104 36.6595L28.371 36.1201C28.1217 35.8709 27.7175 35.8709 27.4682 36.1201C27.219 36.3694 27.219 36.7736 27.4683 37.0229ZM29.3154 22.0709C29.0224 22.0709 28.7834 22.3098 28.7834 22.6029V24.5783C28.7834 24.8713 29.0224 25.1102 29.3154 25.1102H38.8284C39.1214 25.1102 39.3604 24.8712 39.3604 24.5783V22.6028C39.3604 22.3098 39.1214 22.0708 38.8284 22.0708H36.3419C36.0948 21.0463 35.1723 20.2852 34.0719 20.2852C32.9715 20.2852 32.049 21.0463 31.8019 22.0709H29.3154Z" fill="#1E70B3" />
            </svg>
        )
    },
    {
        title: "Integrate and Launch Solution",
        svg: (
            <svg width="67" height="67" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M38.8476 66.1037C56.943 63.3444 69.3754 46.4383 66.6161 28.3428C63.8568 10.2473 46.9508 -2.18515 28.8554 0.574153C10.76 3.33346 -1.67234 20.2396 1.08695 38.3351C3.84623 56.4306 20.7523 68.863 38.8476 66.1037Z" fill="#004F8F" />
                <path d="M36.2302 57.9582C49.8147 56.6477 59.7649 44.5729 58.4544 30.9883C57.144 17.4037 45.0692 7.45351 31.4847 8.76395C17.9002 10.0744 7.95001 22.1492 9.26045 35.7338C10.5709 49.3185 22.6457 59.2686 36.2302 57.9582Z" fill="white" />
                <path d="M27.4555 27.3691L25.1973 27.5436C24.5689 27.5921 24.0093 27.9215 23.6618 28.4471L21.0575 32.386C20.7939 32.7846 20.752 33.2835 20.9453 33.7205C21.1387 34.1575 21.536 34.462 22.0082 34.5352L24.0758 34.8554C24.5595 32.2886 25.7174 29.7281 27.4555 27.3691ZM32.3653 43.1448L32.6855 45.2125C32.7587 45.6847 33.0632 46.082 33.5002 46.2753C33.6783 46.3544 33.871 46.3953 34.0659 46.3955C34.3394 46.3953 34.6068 46.3145 34.8347 46.1632L38.7737 43.5589C39.2993 43.2113 39.6287 42.6516 39.6771 42.0234L39.8516 39.7652C37.4926 41.5033 34.9321 42.6612 32.3653 43.1448ZM31.5877 41.7117C31.6594 41.7117 31.7316 41.7058 31.8037 41.6938C32.8791 41.514 33.9156 41.2111 34.9043 40.8146L26.4061 32.3164C26.0096 33.3051 25.7067 34.3416 25.5269 35.4171C25.4561 35.841 25.5982 36.2728 25.9021 36.5768L30.644 41.3186C30.8963 41.5709 31.2368 41.7117 31.5877 41.7117ZM44.8122 31.8865C46.8918 27.866 46.9688 23.6174 46.8601 21.6248C46.8229 20.9421 46.2786 20.3978 45.5958 20.3606C45.2154 20.3401 44.8345 20.3299 44.4535 20.3301C42.2254 20.3301 38.6999 20.6676 35.3342 22.4085C32.6593 23.792 29.1519 26.8384 27.0825 30.842C27.107 30.8611 27.1309 30.8814 27.1534 30.9039L36.3169 40.0674C36.3394 40.0899 36.3596 40.1137 36.3787 40.1382C40.3823 38.0688 43.4287 34.5613 44.8122 31.8865ZM35.9806 25.8404C37.4692 24.3518 39.8915 24.3517 41.3802 25.8404C42.1014 26.5616 42.4985 27.5204 42.4985 28.5403C42.4985 29.5601 42.1014 30.519 41.3802 31.2401C40.636 31.9843 39.658 32.3565 38.6804 32.3566C37.7025 32.3567 36.725 31.9845 35.9806 31.2401C35.2594 30.519 34.8622 29.5601 34.8622 28.5403C34.8622 27.5204 35.2594 26.5616 35.9806 25.8404Z" fill="#004F8F" />
                <path d="M37.0603 30.1597C37.9535 31.0529 39.407 31.0529 40.3002 30.1597C40.7328 29.727 40.9711 29.1517 40.9711 28.5398C40.9711 27.9278 40.7328 27.3526 40.3002 26.9199C39.8536 26.4733 39.2669 26.25 38.6803 26.25C38.0936 26.25 37.507 26.4733 37.0604 26.9199C36.6277 27.3526 36.3894 27.9278 36.3894 28.5398C36.3894 29.1517 36.6277 29.727 37.0603 30.1597ZM21.6042 41.8099C21.7996 41.8099 21.9951 41.7354 22.1441 41.5862L24.6373 39.0931C24.9355 38.7949 24.9355 38.3114 24.6373 38.0132C24.3391 37.7149 23.8556 37.7149 23.5573 38.0132L21.0642 40.5063C20.766 40.8045 20.766 41.288 21.0642 41.5862C21.135 41.6573 21.2192 41.7136 21.3119 41.752C21.4045 41.7904 21.5039 41.8101 21.6042 41.8099ZM26.9221 40.298C26.6239 39.9998 26.1404 39.9998 25.8422 40.298L21.0489 45.0913C20.7506 45.3895 20.7506 45.873 21.0489 46.1712C21.198 46.3203 21.3934 46.3949 21.5889 46.3949C21.7843 46.3949 21.9797 46.3203 22.1288 46.1712L26.922 41.3779C27.2203 41.0797 27.2203 40.5962 26.9221 40.298ZM28.1269 42.5828L25.6338 45.076C25.3356 45.3742 25.3356 45.8577 25.6338 46.1559C25.783 46.305 25.9784 46.3796 26.1738 46.3796C26.3692 46.3796 26.5647 46.3051 26.7137 46.1559L29.2069 43.6627C29.5051 43.3645 29.5051 42.881 29.2069 42.5828C28.9087 42.2846 28.4252 42.2846 28.1269 42.5828Z" fill="#004F8F" />
            </svg>
        )
    },
    {
        title: "Perform Ongoing Business Reviews",
        svg: (
            <svg width="67" height="67" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M59.342 54.5711C70.8067 40.3015 68.5331 19.4398 54.2636 7.97498C39.9942 -3.48981 19.1326 -1.21613 7.66787 13.0534C-3.79684 27.3229 -1.52317 48.1847 12.7463 59.6495C27.0157 71.1143 47.8773 68.8406 59.342 54.5711Z" fill="#1E70B3" />
                <path d="M57.9481 37.5716C60.0384 24.0849 50.7998 11.4573 37.3133 9.36707C23.8267 7.27681 11.1992 16.5154 9.10894 30.0021C7.0187 43.4888 16.2572 56.1164 29.7438 58.2066C43.2304 60.2969 55.8579 51.0582 57.9481 37.5716Z" fill="white" />
                <path d="M42.3461 30.0186L40.4879 30.7692C40.2508 30.8657 39.9971 30.9153 39.7411 30.9152C39.4682 30.9142 39.1984 30.8572 38.9484 30.7478C38.6984 30.6384 38.4734 30.4789 38.2875 30.2792C38.1015 30.0794 37.9585 29.8437 37.8672 29.5865C37.7759 29.3293 37.7383 29.0562 37.7567 28.7839L37.897 26.7854L36.6077 25.2521C36.3311 24.9173 36.1732 24.5004 36.1585 24.0664H23.9404C21.7272 24.0664 19.9189 25.8747 19.9189 28.0973V39.3048C19.9189 41.5274 21.7272 43.3263 23.9404 43.3263H27.0013L26.9354 45.2005C26.9277 45.4662 26.9734 45.7307 27.0698 45.9785C27.1663 46.2262 27.3115 46.452 27.4968 46.6426C27.6821 46.8332 27.9038 46.9846 28.1487 47.088C28.3936 47.1913 28.6568 47.2444 28.9226 47.2442C29.337 47.2442 29.7514 47.1029 30.0998 46.8392L34.7712 43.3263H40.1583C42.3715 43.3263 44.1798 41.5274 44.1798 39.3048V30.7598L42.3461 30.0186ZM32.5175 36.6866H27.5739C27.3491 36.6866 27.1335 36.5973 26.9746 36.4383C26.8156 36.2794 26.7263 36.0638 26.7263 35.839C26.7263 35.6141 26.8156 35.3986 26.9746 35.2396C27.1335 35.0806 27.3491 34.9913 27.5739 34.9913H32.5175C32.7423 34.9913 32.9579 35.0806 33.1168 35.2396C33.2758 35.3986 33.3651 35.6141 33.3651 35.839C33.3651 36.0638 33.2758 36.2794 33.1168 36.4383C32.9579 36.5973 32.7423 36.6866 32.5175 36.6866ZM36.8997 32.4051H27.5758C27.351 32.4051 27.1354 32.3158 26.9764 32.1569C26.8175 31.9979 26.7282 31.7823 26.7282 31.5575C26.7282 31.3327 26.8175 31.1171 26.9764 30.9582C27.1354 30.7992 27.351 30.7099 27.5758 30.7099H36.8997C37.1245 30.7099 37.3401 30.7992 37.499 30.9582C37.658 31.1171 37.7473 31.3327 37.7473 31.5575C37.7473 31.7823 37.658 31.9979 37.499 32.1569C37.3401 32.3158 37.1245 32.4051 36.8997 32.4051Z" fill="#1E70B3" />
                <path d="M42.8357 20.6036L44.2004 22.7877L46.699 23.4102C47.1134 23.5138 47.2763 24.0149 47.0022 24.3426L45.3465 26.3147L45.5264 28.883C45.5332 28.9808 45.515 29.0787 45.4736 29.1675C45.4321 29.2564 45.3688 29.3332 45.2895 29.3908C45.2102 29.4484 45.1176 29.485 45.0203 29.497C44.9231 29.509 44.8243 29.4961 44.7334 29.4594L42.3459 28.4941L39.9585 29.4594C39.8676 29.4961 39.7688 29.509 39.6715 29.497C39.5743 29.485 39.4816 29.4484 39.4024 29.3908C39.3231 29.3332 39.2597 29.2564 39.2183 29.1675C39.1769 29.0787 39.1587 28.9808 39.1655 28.883L39.3454 26.3147L37.6897 24.3426C37.6267 24.2675 37.5839 24.1775 37.5652 24.0813C37.5466 23.985 37.5527 23.8856 37.583 23.7924C37.6134 23.6992 37.6669 23.6152 37.7386 23.5483C37.8103 23.4815 37.8978 23.434 37.9929 23.4102L40.4915 22.7877L41.8562 20.6036C41.9081 20.5205 41.9803 20.452 42.0659 20.4045C42.1516 20.357 42.248 20.332 42.3459 20.332C42.4439 20.332 42.5403 20.357 42.6259 20.4045C42.7116 20.452 42.7838 20.5205 42.8357 20.6036Z" fill="#1E70B3" />
            </svg>
        )
    },
    {
        title: "Track Model Performance",
        svg: (
            <svg width="67" height="67" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M38.3056 66.1057C56.401 63.3463 68.8334 46.4402 66.0741 28.3447C63.3148 10.2492 46.4088 -2.1832 28.3134 0.576106C10.218 3.33541 -2.21433 20.2415 0.544954 38.337C3.30424 56.4325 20.2103 68.865 38.3056 66.1057Z" fill="#004F8F" />
                <path d="M33.3097 58.0515C46.9573 58.0515 58.0209 46.9879 58.0209 33.3402C58.021 19.6925 46.9574 8.62891 33.3098 8.62891C19.6622 8.62891 8.59862 19.6925 8.5986 33.3402C8.59859 46.9879 19.6621 58.0515 33.3097 58.0515Z" fill="white" />
                <path d="M36.1835 43.5477H30.3974C29.3441 43.5477 29.3441 41.956 30.3974 41.956H36.1835C37.2368 41.956 37.2368 43.5477 36.1835 43.5477ZM40.3677 46.7341H26.2128C25.1595 46.7341 25.1595 45.1425 26.2128 45.1425H40.3677C41.421 45.1425 41.421 46.7341 40.3677 46.7341ZM32.4948 19.9473C28.9868 20.1372 25.828 21.5552 23.3977 23.7453L26.4307 26.7782C28.0467 25.3733 30.1169 24.4212 32.4948 24.245V19.9473ZM22.7756 33.9678C22.9446 31.6493 23.8582 29.595 25.3066 27.9051L22.2666 24.8651C20.0616 27.3141 18.6596 30.4039 18.4746 33.9678H22.7756ZM22.7685 35.5594H18.4746C18.6408 38.6889 19.7585 41.5659 21.5666 43.8876C21.8429 44.242 22.3685 44.2805 22.7112 43.9898L24.7655 42.2496C25.0993 41.9666 25.1322 41.4792 24.868 41.1301C23.6455 39.5146 22.9163 37.58 22.7685 35.5594ZM45.9989 27.0842C45.2809 27.9659 44.2152 29.2735 43.024 30.7325C43.5435 31.9761 43.8481 33.3311 43.8481 34.7636C43.8517 37.0772 43.092 39.3273 41.6866 41.1652C41.4306 41.5005 41.5031 41.9833 41.8256 42.2549L43.8707 43.9763C44.2177 44.2685 44.7489 44.2285 45.0273 43.8702C47.0531 41.2672 48.1507 38.0617 48.1455 34.7633C48.1458 31.9082 47.3465 29.2997 45.9989 27.0842ZM45.0517 25.7249C42.4503 22.368 38.4719 20.1849 34.0864 19.9483V24.2489C36.8138 24.4569 39.6154 25.7281 41.6046 28.2719C41.6046 28.2719 32.1291 35.3055 31.792 35.6429C31.4236 36.0159 31.2178 36.5194 31.2194 37.0436C31.221 37.5679 31.43 38.0701 31.8007 38.4408C32.1713 38.8115 32.6736 39.0204 33.1978 39.0221C33.722 39.0237 34.2256 38.8178 34.5986 38.4495C35.1008 37.9469 45.0517 25.7249 45.0517 25.7249Z" fill="#004F8F" />
            </svg>
        )
    }
]

const supportList = [
    {
        success: "71%+",
        description: "Many of our Success Team members hold advanced degrees from prestigious universities."
    },
    {
        success: "90+",
        description: "With more than 90 years of combined experience in applying AI to underwriting."
    },
    {
        success: "400+",
        description: "More than 400 active models are continuously monitored and optimized."
    },
    {
        success: "75+",
        description: "Consistently achieves a world-class Net Promoter Score (NPS)."
    },
]


const Hero2 = () => {
    const [isActiveCard, setIsActiveCard] = useState(1);

    return (
        <div>
            <div className="bg-gray-100 mx-4 rounded-lg py-2 text-center text-sm text-gray-600 ">
                <div className="inline-flex items-center">
                    <svg width="30" height="32" viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M28.2747 16.548C28.2138 16.4244 28.1821 16.2884 28.1821 16.1506C28.1821 16.0128 28.2138 15.8768 28.2747 15.7532L29.4191 13.4121C30.0562 12.1086 29.5514 10.5549 28.2698 9.87488L25.9679 8.65353C25.846 8.58932 25.7404 8.49794 25.6594 8.38646C25.5784 8.27497 25.5241 8.14636 25.5007 8.01055L25.0505 5.44385C24.7998 4.01479 23.4779 3.05448 22.0416 3.2577L19.4615 3.62267C19.3251 3.64239 19.186 3.63049 19.0549 3.5879C18.9238 3.5453 18.8043 3.47315 18.7056 3.37702L16.8327 1.56525C15.7899 0.556405 14.1563 0.556345 13.1135 1.56525L11.2406 3.3772C11.1418 3.47331 11.0223 3.54545 10.8912 3.58804C10.7602 3.63063 10.6211 3.64254 10.4847 3.62285L7.90458 3.25788C6.46779 3.05454 5.14635 4.01497 4.89567 5.44403L4.44548 8.01061C4.42208 8.14642 4.36779 8.27503 4.28679 8.38653C4.2058 8.49802 4.10026 8.58942 3.97834 8.65365L1.67647 9.875C0.394824 10.555 -0.110017 12.1087 0.527147 13.4122L1.67149 15.7533C1.7324 15.8769 1.76408 16.0129 1.76408 16.1507C1.76408 16.2885 1.7324 16.4245 1.67149 16.5481L0.527087 18.8892C-0.110077 20.1927 0.394764 21.7464 1.6764 22.4264L3.97828 23.6478C4.10021 23.712 4.20576 23.8033 4.28677 23.9148C4.36778 24.0263 4.42208 24.1549 4.44548 24.2907L4.89567 26.8574C5.12388 28.1584 6.2394 29.0707 7.52146 29.0706C7.64773 29.0706 7.77585 29.0617 7.90464 29.0435L10.4848 28.6785C10.6212 28.6588 10.7603 28.6707 10.8913 28.7133C11.0224 28.7559 11.1419 28.8281 11.2406 28.9242L13.1135 30.736C13.635 31.2405 14.3039 31.4926 14.9731 31.4926C15.6421 31.4925 16.3114 31.2403 16.8327 30.736L18.7056 28.9242C18.9077 28.7288 19.1831 28.6395 19.4615 28.6785L22.0416 29.0435C23.4786 29.2468 24.7998 28.2864 25.0505 26.8574L25.5007 24.2908C25.5241 24.155 25.5784 24.0264 25.6594 23.9149C25.7404 23.8034 25.846 23.712 25.9679 23.6478L28.2698 22.4264C29.5514 21.7464 30.0562 20.1927 29.4191 18.8892L28.2747 16.548ZM11.4336 8.18692C13.2226 8.18692 14.6781 9.64242 14.6781 11.4314C14.6781 13.2204 13.2226 14.6759 11.4336 14.6759C9.64462 14.6759 8.18913 13.2204 8.18913 11.4314C8.18913 9.64242 9.64462 8.18692 11.4336 8.18692ZM9.75896 22.616C9.58619 22.7888 9.35972 22.8752 9.13331 22.8752C8.90689 22.8752 8.68036 22.7888 8.50765 22.616C8.1621 22.2705 8.1621 21.7102 8.50765 21.3646L20.1871 9.68514C20.5326 9.33959 21.093 9.33959 21.4385 9.68514C21.7841 10.0307 21.7841 10.591 21.4385 10.9365L9.75896 22.616ZM18.5124 24.1144C16.7234 24.1144 15.2679 22.6589 15.2679 20.8699C15.2679 19.0809 16.7234 17.6254 18.5124 17.6254C20.3014 17.6254 21.7569 19.0809 21.7569 20.8699C21.7569 22.6589 20.3014 24.1144 18.5124 24.1144Z" fill="#004F8F" />
                        <path d="M18.5125 19.3955C17.6993 19.3955 17.0377 20.0571 17.0377 20.8703C17.0377 21.6835 17.6993 22.345 18.5125 22.345C19.3257 22.345 19.9873 21.6835 19.9873 20.8703C19.9873 20.0571 19.3257 19.3955 18.5125 19.3955ZM11.4337 9.95703C10.6205 9.95703 9.95898 10.6186 9.95898 11.4318C9.95898 12.2449 10.6205 12.9066 11.4337 12.9066C12.2469 12.9066 12.9085 12.245 12.9085 11.4318C12.9084 10.6186 12.2469 9.95703 11.4337 9.95703Z" fill="#004F8F" />
                    </svg>
                    <span className="ml-2">SIGNUP OFFER: Get 20% OFF on interest on your first Loan.</span>
                    <Link href="/offer-details" className="underline text-blue-300 ml-1">See Offer Details</Link>
                </div>
            </div>
            <div className="w-full bg-white px-[10%] py-8">
                <div className="mx-auto sm:w-[80vw] md:w-[40%] my-8">
                    <h3 className="text-center text-2xl text-[#004F8F]">Assistance Whenever and However{' '}
                        <span className="text-black">you need it</span></h3>
                    <h2 className="text-gray-300 text-center">24/7 support with no ticketing systems or 1-800 numbers—just genuine human assistance.</h2>
                </div>
                <div className="flex items-center justify-center py-16 ">
                    {Assistance.map((assist, index) => (
                        (index + 1) % 2 ? (
                            <div className="relative mr-[-3%]">
                                <div className="absolute -top-1/4 -translate-y-1/2 text-center">{assist.title}</div>
                                <div>{btTSVG}</div>
                                <div className="absolute translate-x-[13%] left-1/4">{assist.svg}</div>
                            </div>) : (
                            <div className="relative mr-[-3%] translate-y-[-10%]">
                                <div className="absolute translate-x-[13%] left-1/4 -translate-y-1/2 -top-1/4">{assist.svg}</div>
                                <div>{ttBSVG}</div>
                                <div className="absolute translate-y-[10%] text-center">{assist.title}</div>
                            </div>
                        )
                    ))}
                </div>
            </div>
            <div className="bg-[#004F8F] text-white relative py-16">
                <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1840 302" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.05" d="M922.536 122.773C1326.16 -97.0133 1702.34 29.191 1839.97 119.766V281.15C1839.97 292.195 1831.02 301.15 1819.97 301.15H20.0262C8.98059 301.15 0.0262451 292.195 0.0262451 281.15V77.8821C139.353 184.424 518.912 342.56 922.536 122.773Z" />
                    <path opacity="0.05" d="M922.536 162.77C1326.16 -57.0172 1702.34 69.1871 1839.97 159.763V281.168C1839.97 292.214 1831.02 301.168 1819.97 301.168H20.0262C8.98059 301.168 0.0262451 292.214 0.0262451 281.168V117.878C139.353 224.42 518.912 382.556 922.536 162.77Z" />
                </svg>
                <div className="mx-auto w-1/2 text-center py-4 ">
                    <h2 className="text-4xl font-bold py-4">Top-tier AI expertise, ready to support you</h2>
                    <p className="text-md">Get US-based, industry experts as an extension of your team. Tap into the best AI lending strategy consultants, business analysts, data scientists, engineers, compliance, and fair lending leaders around.</p>
                </div>
                <div className="container sm:w-[90vw] md:w-[80%] grid grid-cols-2 gap-4 py-4 ">
                    {supportList.map((box, index) => (
                        <div key={index} className="md:flex bg-gray-200 bg-opacity-[20%] p-4 items-center  rounded-lg">
                            <h3 className="text-4xl bg-gray-300 bg-opacity-[20%] p-4 mr-4 font-semibold">{box.success}</h3>
                            <p>{box.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Hero2;
