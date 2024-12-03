"use client";
import Image from "next/image";
import Link from "next/link";
import CardToggle from '@/components/custome-ui/card-toggle';
import React, { useState } from 'react'
import LeftImage from "@/public/assets/how-it-works/3.jpg"

const Groups = [
    {
        title: "Intelligent",
        svg: (
            <svg width="92" height="92" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.62207" y="0.671875" width="90.8496" height="90.8496" rx="10" fill="white" />
                <path d="M39.7932 19.5977C37.5191 19.5977 35.4315 20.939 34.4544 22.9467C36.9772 23.9327 38.3097 26.5266 37.7234 29.6269C37.6434 30.0533 37.2703 30.3464 36.8528 30.3464C36.7995 30.3464 36.7462 30.3464 36.6929 30.3286C36.5779 30.3091 36.4679 30.2668 36.3695 30.204C36.2711 30.1413 36.1863 30.0595 36.12 29.9635C36.0538 29.8674 36.0075 29.759 35.9838 29.6448C35.9601 29.5305 35.9596 29.4126 35.9823 29.2982C36.3731 27.2106 35.6269 24.901 33.0952 24.3946H33.0863C33.0346 24.3852 32.984 24.3703 32.9353 24.3502C32.9264 24.3502 32.9087 24.3502 32.8998 24.3413C32.1181 23.986 31.3008 23.8083 30.4569 23.8083C27.179 23.8083 24.5051 26.4822 24.5051 29.7601C24.5051 30.5685 24.6739 31.3591 24.9937 32.1142L25.0204 32.1941C25.4823 33.3667 26.6726 33.9352 27.8097 33.5177C28.2627 33.3489 28.778 33.5888 28.9467 34.0418C29.1155 34.5038 28.8757 35.019 28.4138 35.1878C27.9696 35.3477 27.5165 35.4276 27.0635 35.4276C25.7132 35.4276 24.4429 34.717 23.7056 33.5177C21.1561 34.2284 19.3795 36.5469 19.3795 39.2474C19.3795 40.2335 19.6193 41.1928 20.0813 42.0456C22.2577 41.0862 24.8338 41.8147 26.2729 43.9022C26.3637 44.0364 26.4164 44.1928 26.4252 44.3546C26.434 44.5165 26.3987 44.6776 26.3229 44.8209C26.2472 44.9642 26.1339 45.0842 25.9952 45.168C25.8565 45.2519 25.6976 45.2964 25.5356 45.2969C25.2513 45.2969 24.9759 45.1637 24.8072 44.9149C23.75 43.3692 21.7691 42.9517 20.2767 43.9555H20.2678C20.25 43.9733 20.2412 43.9822 20.2234 43.9911C19.4343 44.4561 18.7796 45.1181 18.3233 45.9123C17.867 46.7065 17.6249 47.6056 17.6206 48.5215C17.6206 51.0532 19.4239 53.2385 21.9112 53.7093C22.0655 53.7387 22.2093 53.8084 22.3279 53.9114C22.4465 54.0143 22.5357 54.1469 22.5863 54.2956C22.6841 54.6065 22.613 54.9441 22.3909 55.184C21.3794 56.2828 20.8209 57.7235 20.8275 59.217C20.8275 62.486 23.4747 65.151 26.7348 65.1687C27.8275 64.92 30.6079 63.9428 30.8655 62.6192C30.9544 62.1395 31.4163 61.8286 31.9049 61.9175C32.3846 62.0152 32.7044 62.486 32.6066 62.9657C32.1802 65.1776 29.2399 66.2969 27.6853 66.7499C27.7073 67.6502 27.9597 68.5297 28.4187 69.3045C28.8776 70.0793 29.5276 70.7234 30.3065 71.1753C31.0854 71.6271 31.9673 71.8716 32.8677 71.8854C33.7681 71.8991 34.6569 71.6816 35.4493 71.2538H35.4582C35.5203 71.1649 35.6092 71.1027 35.7158 71.0494C37.3769 70.2055 38.0521 68.2867 37.2615 66.6789C37.0394 66.2347 37.217 65.7017 37.6612 65.4885C37.7655 65.4358 37.8792 65.4044 37.9957 65.396C38.1122 65.3876 38.2292 65.4024 38.34 65.4396C38.4507 65.4768 38.5529 65.5356 38.6408 65.6126C38.7286 65.6896 38.8002 65.7833 38.8516 65.8883C39.8731 67.9492 39.349 70.321 37.7056 71.8134C38.5318 72.3197 39.4823 72.5951 40.4772 72.5951C42.6003 72.5951 44.5457 71.2893 45.3541 69.3261V47.8642C44.2259 46.8337 42.6358 46.6916 41.3744 47.5444C41.2782 47.6097 41.17 47.6554 41.0561 47.679C40.9422 47.7025 40.8247 47.7033 40.7105 47.6815C40.5962 47.6596 40.4874 47.6155 40.3902 47.5516C40.2931 47.4876 40.2094 47.4052 40.1441 47.309C40.0788 47.2127 40.033 47.1046 40.0095 46.9906C39.986 46.8767 39.9851 46.7593 40.007 46.645C40.0511 46.4143 40.1851 46.2106 40.3795 46.0786C41.1031 45.5836 41.9461 45.2913 42.8208 45.2319C43.6955 45.1726 44.5702 45.3484 45.3541 45.7411V37.2487C44.2259 36.2182 42.6358 36.0761 41.3655 36.92C41.17 37.0417 40.9348 37.0825 40.7096 37.034C40.4845 36.9854 40.287 36.8512 40.159 36.6598C40.031 36.4683 39.9824 36.2346 40.0236 36.008C40.0647 35.7814 40.1923 35.5796 40.3795 35.4454C41.1056 34.9558 41.9486 34.6674 42.8224 34.6097C43.6963 34.552 44.5699 34.7269 45.3541 35.1167V23.4441C44.9301 22.3124 44.1702 21.3373 43.1762 20.6498C42.1822 19.9623 41.0018 19.5951 39.7932 19.5977ZM30.9366 56.6053C30.8833 56.6053 30.8211 56.5964 30.7678 56.5875C28.0318 56.0545 26.2995 53.4428 26.8236 50.6357C26.9125 50.156 27.3744 49.8362 27.863 49.9251C28.3427 50.0139 28.6625 50.4758 28.5648 50.9644C28.2272 52.7944 29.3376 54.4999 31.1054 54.8464C31.5851 54.9352 31.9049 55.406 31.8072 55.8857C31.7272 56.3121 31.3541 56.6053 30.9366 56.6053ZM30.4036 40.9086C29.995 41.184 29.4442 41.0774 29.1688 40.6687C28.8934 40.2601 29 39.7093 29.4087 39.434C31.7183 37.8794 34.7919 38.5012 36.4087 40.8553C36.4995 40.9895 36.5522 41.1459 36.561 41.3077C36.5698 41.4695 36.5345 41.6307 36.4587 41.774C36.383 41.9172 36.2697 42.0372 36.131 42.1211C35.9923 42.2049 35.8334 42.2495 35.6714 42.25C35.3871 42.25 35.1117 42.1078 34.9429 41.8591C33.8858 40.3223 31.896 39.9048 30.4036 40.9086ZM40.646 54.6243C40.6789 54.8576 40.6179 55.0943 40.4763 55.2826C40.3347 55.4708 40.1241 55.5951 39.8909 55.6281C39.6422 55.6637 39.4023 55.6814 39.1625 55.6814C36.7018 55.6814 34.5965 53.8781 34.2056 51.3109C34.1877 51.1953 34.1929 51.0774 34.2207 50.9638C34.2486 50.8503 34.2987 50.7434 34.368 50.6493C34.4374 50.5551 34.5247 50.4757 34.6248 50.4154C34.725 50.3551 34.8362 50.3153 34.9518 50.2982C35.0674 50.28 35.1854 50.285 35.299 50.3128C35.4127 50.3405 35.5197 50.3906 35.6139 50.4599C35.7081 50.5293 35.7875 50.6167 35.8477 50.717C35.9079 50.8174 35.9476 50.9286 35.9645 51.0444C36.2399 52.8832 37.8655 54.118 39.6422 53.8692C40.1219 53.7893 40.5749 54.1357 40.646 54.6243ZM52.1587 31.5456L53.3313 29.6357C53.5445 29.6802 53.7665 29.7157 53.9975 29.7157C55.8452 29.7157 57.3465 28.2144 57.3465 26.3667C57.3465 25.4785 56.9936 24.6267 56.3656 23.9986C55.7375 23.3706 54.8857 23.0177 53.9975 23.0177C53.1093 23.0177 52.2575 23.3706 51.6294 23.9986C51.0014 24.6267 50.6485 25.4785 50.6485 26.3667C50.6485 27.1484 50.9239 27.8413 51.3681 28.4187L50.5242 29.7779H46.8554V32.0875H51.1726C51.5813 32.0875 51.9544 31.8832 52.1587 31.5456Z" fill="#004F8F" />
                <path d="M59.6206 37.6936L62.863 33.9004C63.0407 33.6872 63.1384 33.4207 63.1384 33.1542V29.4943C64.4087 29.0235 65.3325 27.8065 65.3325 26.3674C65.3325 24.5286 63.8224 23.0273 61.9835 23.0273C61.0969 23.0273 60.2464 23.379 59.6186 24.0051C58.9908 24.6312 58.6369 25.4808 58.6346 26.3674C58.6346 27.8065 59.5495 29.0324 60.8287 29.4943V32.7278L58.2082 35.7926H46.8643V38.1022H58.7412C59.0787 38.1022 59.3985 37.9512 59.6206 37.6936Z" fill="#004F8F" />
                <path d="M60.3934 42.8085L64.9683 37.5585H67.9975C68.4683 38.8288 69.6853 39.7438 71.1244 39.7438C72.9721 39.7438 74.4734 38.2425 74.4734 36.3948C74.471 35.5081 74.1172 34.6586 73.4894 34.0324C72.8616 33.4063 72.0111 33.0547 71.1244 33.0547C69.6764 33.0547 68.4594 33.9785 67.9975 35.2489H64.4442C64.1066 35.2489 63.7868 35.391 63.5648 35.6397L58.9899 40.8897H46.8643V43.1994H59.5229C59.8604 43.1994 60.1802 43.0572 60.3934 42.8085ZM54.0064 62.476C53.7754 62.476 53.5533 62.5115 53.3401 62.556L52.1676 60.6461C51.9544 60.3085 51.5901 60.1042 51.1904 60.1042H46.8731V62.4138H50.5419L51.3769 63.773C50.9328 64.3415 50.6574 65.0433 50.6574 65.825C50.6574 66.7132 51.0102 67.565 51.6383 68.1931C52.2664 68.8211 53.1182 69.174 54.0064 69.174C54.8946 69.174 55.7464 68.8211 56.3745 68.1931C57.0025 67.565 57.3554 66.7132 57.3554 65.825C57.3554 63.9773 55.8541 62.476 54.0064 62.476Z" fill="#004F8F" />
                <path d="M63.1384 62.6997V59.0398C63.1384 58.7733 63.0407 58.5068 62.863 58.2847L59.6206 54.4915C59.3985 54.2428 59.0787 54.0918 58.7412 54.0918H46.8643V56.4014H58.2082L60.8287 59.4662V62.6997C59.5495 63.1705 58.6346 64.3875 58.6346 65.8266C58.6369 66.7132 58.9908 67.5628 59.6186 68.1889C60.2464 68.8151 61.0969 69.1667 61.9835 69.1667C63.8224 69.1667 65.3325 67.6654 65.3325 65.8266C65.3325 64.3875 64.4087 63.1616 63.1384 62.6997Z" fill="#004F8F" />
                <path d="M71.1244 52.4478C69.6853 52.4478 68.4683 53.3627 67.9975 54.6331H64.9683L60.3934 49.3831C60.1802 49.1343 59.8604 48.9922 59.5229 48.9922H46.8643V51.3018H58.9899L63.5648 56.5518C63.778 56.8006 64.0978 56.9427 64.4442 56.9427H67.9975C68.2304 57.5852 68.6554 58.1404 69.2149 58.533C69.7743 58.9255 70.441 59.1364 71.1244 59.1369C72.0111 59.1369 72.8616 58.7852 73.4894 58.1591C74.1172 57.533 74.471 56.6834 74.4734 55.7968C74.4734 53.949 72.9721 52.4478 71.1244 52.4478Z" fill="#004F8F" />
            </svg>
        ),
        subtitle: "Make confident decisions with enhanced data and advanced analytics",
        description: "Assess your borrowers with 2-4x more accurate risk ranking than generic models, and expand access to more consumers without increasing risk. AibuildIQ creates client-tailored machine learning models with ethically sourced, responsibly used data to ensure optimal performance and compliance.",
        content: [
            {
                title: "Effectively Evaluate 98%",
                description: " of American adults",
            },
            {
                title: "Lower Risk by Over 20%",
                description: " while maintaining approval levels",
            },
            {
                title: "Increase Approval Rates by 25% ",
                description: " with no extra risk",
            },
        ]
    },
    {
        title: "Accessible",
        svg: (
            <svg width="92" height="92" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.62207" y="0.671875" width="90.8496" height="90.8496" rx="10" fill="white" />
                <path d="M39.7932 19.5977C37.5191 19.5977 35.4315 20.939 34.4544 22.9467C36.9772 23.9327 38.3097 26.5266 37.7234 29.6269C37.6434 30.0533 37.2703 30.3464 36.8528 30.3464C36.7995 30.3464 36.7462 30.3464 36.6929 30.3286C36.5779 30.3091 36.4679 30.2668 36.3695 30.204C36.2711 30.1413 36.1863 30.0595 36.12 29.9635C36.0538 29.8674 36.0075 29.759 35.9838 29.6448C35.9601 29.5305 35.9596 29.4126 35.9823 29.2982C36.3731 27.2106 35.6269 24.901 33.0952 24.3946H33.0863C33.0346 24.3852 32.984 24.3703 32.9353 24.3502C32.9264 24.3502 32.9087 24.3502 32.8998 24.3413C32.1181 23.986 31.3008 23.8083 30.4569 23.8083C27.179 23.8083 24.5051 26.4822 24.5051 29.7601C24.5051 30.5685 24.6739 31.3591 24.9937 32.1142L25.0204 32.1941C25.4823 33.3667 26.6726 33.9352 27.8097 33.5177C28.2627 33.3489 28.778 33.5888 28.9467 34.0418C29.1155 34.5038 28.8757 35.019 28.4138 35.1878C27.9696 35.3477 27.5165 35.4276 27.0635 35.4276C25.7132 35.4276 24.4429 34.717 23.7056 33.5177C21.1561 34.2284 19.3795 36.5469 19.3795 39.2474C19.3795 40.2335 19.6193 41.1928 20.0813 42.0456C22.2577 41.0862 24.8338 41.8147 26.2729 43.9022C26.3637 44.0364 26.4164 44.1928 26.4252 44.3546C26.434 44.5165 26.3987 44.6776 26.3229 44.8209C26.2472 44.9642 26.1339 45.0842 25.9952 45.168C25.8565 45.2519 25.6976 45.2964 25.5356 45.2969C25.2513 45.2969 24.9759 45.1637 24.8072 44.9149C23.75 43.3692 21.7691 42.9517 20.2767 43.9555H20.2678C20.25 43.9733 20.2412 43.9822 20.2234 43.9911C19.4343 44.4561 18.7796 45.1181 18.3233 45.9123C17.867 46.7065 17.6249 47.6056 17.6206 48.5215C17.6206 51.0532 19.4239 53.2385 21.9112 53.7093C22.0655 53.7387 22.2093 53.8084 22.3279 53.9114C22.4465 54.0143 22.5357 54.1469 22.5863 54.2956C22.6841 54.6065 22.613 54.9441 22.3909 55.184C21.3794 56.2828 20.8209 57.7235 20.8275 59.217C20.8275 62.486 23.4747 65.151 26.7348 65.1687C27.8275 64.92 30.6079 63.9428 30.8655 62.6192C30.9544 62.1395 31.4163 61.8286 31.9049 61.9175C32.3846 62.0152 32.7044 62.486 32.6066 62.9657C32.1802 65.1776 29.2399 66.2969 27.6853 66.7499C27.7073 67.6502 27.9597 68.5297 28.4187 69.3045C28.8776 70.0793 29.5276 70.7234 30.3065 71.1753C31.0854 71.6271 31.9673 71.8716 32.8677 71.8854C33.7681 71.8991 34.6569 71.6816 35.4493 71.2538H35.4582C35.5203 71.1649 35.6092 71.1027 35.7158 71.0494C37.3769 70.2055 38.0521 68.2867 37.2615 66.6789C37.0394 66.2347 37.217 65.7017 37.6612 65.4885C37.7655 65.4358 37.8792 65.4044 37.9957 65.396C38.1122 65.3876 38.2292 65.4024 38.34 65.4396C38.4507 65.4768 38.5529 65.5356 38.6408 65.6126C38.7286 65.6896 38.8002 65.7833 38.8516 65.8883C39.8731 67.9492 39.349 70.321 37.7056 71.8134C38.5318 72.3197 39.4823 72.5951 40.4772 72.5951C42.6003 72.5951 44.5457 71.2893 45.3541 69.3261V47.8642C44.2259 46.8337 42.6358 46.6916 41.3744 47.5444C41.2782 47.6097 41.17 47.6554 41.0561 47.679C40.9422 47.7025 40.8247 47.7033 40.7105 47.6815C40.5962 47.6596 40.4874 47.6155 40.3902 47.5516C40.2931 47.4876 40.2094 47.4052 40.1441 47.309C40.0788 47.2127 40.033 47.1046 40.0095 46.9906C39.986 46.8767 39.9851 46.7593 40.007 46.645C40.0511 46.4143 40.1851 46.2106 40.3795 46.0786C41.1031 45.5836 41.9461 45.2913 42.8208 45.2319C43.6955 45.1726 44.5702 45.3484 45.3541 45.7411V37.2487C44.2259 36.2182 42.6358 36.0761 41.3655 36.92C41.17 37.0417 40.9348 37.0825 40.7096 37.034C40.4845 36.9854 40.287 36.8512 40.159 36.6598C40.031 36.4683 39.9824 36.2346 40.0236 36.008C40.0647 35.7814 40.1923 35.5796 40.3795 35.4454C41.1056 34.9558 41.9486 34.6674 42.8224 34.6097C43.6963 34.552 44.5699 34.7269 45.3541 35.1167V23.4441C44.9301 22.3124 44.1702 21.3373 43.1762 20.6498C42.1822 19.9623 41.0018 19.5951 39.7932 19.5977ZM30.9366 56.6053C30.8833 56.6053 30.8211 56.5964 30.7678 56.5875C28.0318 56.0545 26.2995 53.4428 26.8236 50.6357C26.9125 50.156 27.3744 49.8362 27.863 49.9251C28.3427 50.0139 28.6625 50.4758 28.5648 50.9644C28.2272 52.7944 29.3376 54.4999 31.1054 54.8464C31.5851 54.9352 31.9049 55.406 31.8072 55.8857C31.7272 56.3121 31.3541 56.6053 30.9366 56.6053ZM30.4036 40.9086C29.995 41.184 29.4442 41.0774 29.1688 40.6687C28.8934 40.2601 29 39.7093 29.4087 39.434C31.7183 37.8794 34.7919 38.5012 36.4087 40.8553C36.4995 40.9895 36.5522 41.1459 36.561 41.3077C36.5698 41.4695 36.5345 41.6307 36.4587 41.774C36.383 41.9172 36.2697 42.0372 36.131 42.1211C35.9923 42.2049 35.8334 42.2495 35.6714 42.25C35.3871 42.25 35.1117 42.1078 34.9429 41.8591C33.8858 40.3223 31.896 39.9048 30.4036 40.9086ZM40.646 54.6243C40.6789 54.8576 40.6179 55.0943 40.4763 55.2826C40.3347 55.4708 40.1241 55.5951 39.8909 55.6281C39.6422 55.6637 39.4023 55.6814 39.1625 55.6814C36.7018 55.6814 34.5965 53.8781 34.2056 51.3109C34.1877 51.1953 34.1929 51.0774 34.2207 50.9638C34.2486 50.8503 34.2987 50.7434 34.368 50.6493C34.4374 50.5551 34.5247 50.4757 34.6248 50.4154C34.725 50.3551 34.8362 50.3153 34.9518 50.2982C35.0674 50.28 35.1854 50.285 35.299 50.3128C35.4127 50.3405 35.5197 50.3906 35.6139 50.4599C35.7081 50.5293 35.7875 50.6167 35.8477 50.717C35.9079 50.8174 35.9476 50.9286 35.9645 51.0444C36.2399 52.8832 37.8655 54.118 39.6422 53.8692C40.1219 53.7893 40.5749 54.1357 40.646 54.6243ZM52.1587 31.5456L53.3313 29.6357C53.5445 29.6802 53.7665 29.7157 53.9975 29.7157C55.8452 29.7157 57.3465 28.2144 57.3465 26.3667C57.3465 25.4785 56.9936 24.6267 56.3656 23.9986C55.7375 23.3706 54.8857 23.0177 53.9975 23.0177C53.1093 23.0177 52.2575 23.3706 51.6294 23.9986C51.0014 24.6267 50.6485 25.4785 50.6485 26.3667C50.6485 27.1484 50.9239 27.8413 51.3681 28.4187L50.5242 29.7779H46.8554V32.0875H51.1726C51.5813 32.0875 51.9544 31.8832 52.1587 31.5456Z" fill="#004F8F" />
                <path d="M59.6206 37.6936L62.863 33.9004C63.0407 33.6872 63.1384 33.4207 63.1384 33.1542V29.4943C64.4087 29.0235 65.3325 27.8065 65.3325 26.3674C65.3325 24.5286 63.8224 23.0273 61.9835 23.0273C61.0969 23.0273 60.2464 23.379 59.6186 24.0051C58.9908 24.6312 58.6369 25.4808 58.6346 26.3674C58.6346 27.8065 59.5495 29.0324 60.8287 29.4943V32.7278L58.2082 35.7926H46.8643V38.1022H58.7412C59.0787 38.1022 59.3985 37.9512 59.6206 37.6936Z" fill="#004F8F" />
                <path d="M60.3934 42.8085L64.9683 37.5585H67.9975C68.4683 38.8288 69.6853 39.7438 71.1244 39.7438C72.9721 39.7438 74.4734 38.2425 74.4734 36.3948C74.471 35.5081 74.1172 34.6586 73.4894 34.0324C72.8616 33.4063 72.0111 33.0547 71.1244 33.0547C69.6764 33.0547 68.4594 33.9785 67.9975 35.2489H64.4442C64.1066 35.2489 63.7868 35.391 63.5648 35.6397L58.9899 40.8897H46.8643V43.1994H59.5229C59.8604 43.1994 60.1802 43.0572 60.3934 42.8085ZM54.0064 62.476C53.7754 62.476 53.5533 62.5115 53.3401 62.556L52.1676 60.6461C51.9544 60.3085 51.5901 60.1042 51.1904 60.1042H46.8731V62.4138H50.5419L51.3769 63.773C50.9328 64.3415 50.6574 65.0433 50.6574 65.825C50.6574 66.7132 51.0102 67.565 51.6383 68.1931C52.2664 68.8211 53.1182 69.174 54.0064 69.174C54.8946 69.174 55.7464 68.8211 56.3745 68.1931C57.0025 67.565 57.3554 66.7132 57.3554 65.825C57.3554 63.9773 55.8541 62.476 54.0064 62.476Z" fill="#004F8F" />
                <path d="M63.1384 62.6997V59.0398C63.1384 58.7733 63.0407 58.5068 62.863 58.2847L59.6206 54.4915C59.3985 54.2428 59.0787 54.0918 58.7412 54.0918H46.8643V56.4014H58.2082L60.8287 59.4662V62.6997C59.5495 63.1705 58.6346 64.3875 58.6346 65.8266C58.6369 66.7132 58.9908 67.5628 59.6186 68.1889C60.2464 68.8151 61.0969 69.1667 61.9835 69.1667C63.8224 69.1667 65.3325 67.6654 65.3325 65.8266C65.3325 64.3875 64.4087 63.1616 63.1384 62.6997Z" fill="#004F8F" />
                <path d="M71.1244 52.4478C69.6853 52.4478 68.4683 53.3627 67.9975 54.6331H64.9683L60.3934 49.3831C60.1802 49.1343 59.8604 48.9922 59.5229 48.9922H46.8643V51.3018H58.9899L63.5648 56.5518C63.778 56.8006 64.0978 56.9427 64.4442 56.9427H67.9975C68.2304 57.5852 68.6554 58.1404 69.2149 58.533C69.7743 58.9255 70.441 59.1364 71.1244 59.1369C72.0111 59.1369 72.8616 58.7852 73.4894 58.1591C74.1172 57.533 74.471 56.6834 74.4734 55.7968C74.4734 53.949 72.9721 52.4478 71.1244 52.4478Z" fill="#004F8F" />
            </svg>
        ),
        subtitle: "Make confident decisions with enhanced data and advanced analytics",
        description: "Assess your borrowers with 2-4x more accurate risk ranking than generic models, and expand access to more consumers without increasing risk. AibuildIQ creates client-tailored machine learning models with ethically sourced, responsibly used data to ensure optimal performance and compliance.",
        content: [
            {
                title: "Effectively Evaluate 98%",
                description: " of American adults",
            },
            {
                title: "Lower Risk by Over 20%",
                description: " while maintaining approval levels",
            },
            {
                title: "Increase Approval Rates by 25% ",
                description: " with no extra risk",
            },
        ]
    },
    {
        title: "Productive",
        svg: (
            <svg width="92" height="92" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.62207" y="0.671875" width="90.8496" height="90.8496" rx="10" fill="white" />
                <path d="M39.7932 19.5977C37.5191 19.5977 35.4315 20.939 34.4544 22.9467C36.9772 23.9327 38.3097 26.5266 37.7234 29.6269C37.6434 30.0533 37.2703 30.3464 36.8528 30.3464C36.7995 30.3464 36.7462 30.3464 36.6929 30.3286C36.5779 30.3091 36.4679 30.2668 36.3695 30.204C36.2711 30.1413 36.1863 30.0595 36.12 29.9635C36.0538 29.8674 36.0075 29.759 35.9838 29.6448C35.9601 29.5305 35.9596 29.4126 35.9823 29.2982C36.3731 27.2106 35.6269 24.901 33.0952 24.3946H33.0863C33.0346 24.3852 32.984 24.3703 32.9353 24.3502C32.9264 24.3502 32.9087 24.3502 32.8998 24.3413C32.1181 23.986 31.3008 23.8083 30.4569 23.8083C27.179 23.8083 24.5051 26.4822 24.5051 29.7601C24.5051 30.5685 24.6739 31.3591 24.9937 32.1142L25.0204 32.1941C25.4823 33.3667 26.6726 33.9352 27.8097 33.5177C28.2627 33.3489 28.778 33.5888 28.9467 34.0418C29.1155 34.5038 28.8757 35.019 28.4138 35.1878C27.9696 35.3477 27.5165 35.4276 27.0635 35.4276C25.7132 35.4276 24.4429 34.717 23.7056 33.5177C21.1561 34.2284 19.3795 36.5469 19.3795 39.2474C19.3795 40.2335 19.6193 41.1928 20.0813 42.0456C22.2577 41.0862 24.8338 41.8147 26.2729 43.9022C26.3637 44.0364 26.4164 44.1928 26.4252 44.3546C26.434 44.5165 26.3987 44.6776 26.3229 44.8209C26.2472 44.9642 26.1339 45.0842 25.9952 45.168C25.8565 45.2519 25.6976 45.2964 25.5356 45.2969C25.2513 45.2969 24.9759 45.1637 24.8072 44.9149C23.75 43.3692 21.7691 42.9517 20.2767 43.9555H20.2678C20.25 43.9733 20.2412 43.9822 20.2234 43.9911C19.4343 44.4561 18.7796 45.1181 18.3233 45.9123C17.867 46.7065 17.6249 47.6056 17.6206 48.5215C17.6206 51.0532 19.4239 53.2385 21.9112 53.7093C22.0655 53.7387 22.2093 53.8084 22.3279 53.9114C22.4465 54.0143 22.5357 54.1469 22.5863 54.2956C22.6841 54.6065 22.613 54.9441 22.3909 55.184C21.3794 56.2828 20.8209 57.7235 20.8275 59.217C20.8275 62.486 23.4747 65.151 26.7348 65.1687C27.8275 64.92 30.6079 63.9428 30.8655 62.6192C30.9544 62.1395 31.4163 61.8286 31.9049 61.9175C32.3846 62.0152 32.7044 62.486 32.6066 62.9657C32.1802 65.1776 29.2399 66.2969 27.6853 66.7499C27.7073 67.6502 27.9597 68.5297 28.4187 69.3045C28.8776 70.0793 29.5276 70.7234 30.3065 71.1753C31.0854 71.6271 31.9673 71.8716 32.8677 71.8854C33.7681 71.8991 34.6569 71.6816 35.4493 71.2538H35.4582C35.5203 71.1649 35.6092 71.1027 35.7158 71.0494C37.3769 70.2055 38.0521 68.2867 37.2615 66.6789C37.0394 66.2347 37.217 65.7017 37.6612 65.4885C37.7655 65.4358 37.8792 65.4044 37.9957 65.396C38.1122 65.3876 38.2292 65.4024 38.34 65.4396C38.4507 65.4768 38.5529 65.5356 38.6408 65.6126C38.7286 65.6896 38.8002 65.7833 38.8516 65.8883C39.8731 67.9492 39.349 70.321 37.7056 71.8134C38.5318 72.3197 39.4823 72.5951 40.4772 72.5951C42.6003 72.5951 44.5457 71.2893 45.3541 69.3261V47.8642C44.2259 46.8337 42.6358 46.6916 41.3744 47.5444C41.2782 47.6097 41.17 47.6554 41.0561 47.679C40.9422 47.7025 40.8247 47.7033 40.7105 47.6815C40.5962 47.6596 40.4874 47.6155 40.3902 47.5516C40.2931 47.4876 40.2094 47.4052 40.1441 47.309C40.0788 47.2127 40.033 47.1046 40.0095 46.9906C39.986 46.8767 39.9851 46.7593 40.007 46.645C40.0511 46.4143 40.1851 46.2106 40.3795 46.0786C41.1031 45.5836 41.9461 45.2913 42.8208 45.2319C43.6955 45.1726 44.5702 45.3484 45.3541 45.7411V37.2487C44.2259 36.2182 42.6358 36.0761 41.3655 36.92C41.17 37.0417 40.9348 37.0825 40.7096 37.034C40.4845 36.9854 40.287 36.8512 40.159 36.6598C40.031 36.4683 39.9824 36.2346 40.0236 36.008C40.0647 35.7814 40.1923 35.5796 40.3795 35.4454C41.1056 34.9558 41.9486 34.6674 42.8224 34.6097C43.6963 34.552 44.5699 34.7269 45.3541 35.1167V23.4441C44.9301 22.3124 44.1702 21.3373 43.1762 20.6498C42.1822 19.9623 41.0018 19.5951 39.7932 19.5977ZM30.9366 56.6053C30.8833 56.6053 30.8211 56.5964 30.7678 56.5875C28.0318 56.0545 26.2995 53.4428 26.8236 50.6357C26.9125 50.156 27.3744 49.8362 27.863 49.9251C28.3427 50.0139 28.6625 50.4758 28.5648 50.9644C28.2272 52.7944 29.3376 54.4999 31.1054 54.8464C31.5851 54.9352 31.9049 55.406 31.8072 55.8857C31.7272 56.3121 31.3541 56.6053 30.9366 56.6053ZM30.4036 40.9086C29.995 41.184 29.4442 41.0774 29.1688 40.6687C28.8934 40.2601 29 39.7093 29.4087 39.434C31.7183 37.8794 34.7919 38.5012 36.4087 40.8553C36.4995 40.9895 36.5522 41.1459 36.561 41.3077C36.5698 41.4695 36.5345 41.6307 36.4587 41.774C36.383 41.9172 36.2697 42.0372 36.131 42.1211C35.9923 42.2049 35.8334 42.2495 35.6714 42.25C35.3871 42.25 35.1117 42.1078 34.9429 41.8591C33.8858 40.3223 31.896 39.9048 30.4036 40.9086ZM40.646 54.6243C40.6789 54.8576 40.6179 55.0943 40.4763 55.2826C40.3347 55.4708 40.1241 55.5951 39.8909 55.6281C39.6422 55.6637 39.4023 55.6814 39.1625 55.6814C36.7018 55.6814 34.5965 53.8781 34.2056 51.3109C34.1877 51.1953 34.1929 51.0774 34.2207 50.9638C34.2486 50.8503 34.2987 50.7434 34.368 50.6493C34.4374 50.5551 34.5247 50.4757 34.6248 50.4154C34.725 50.3551 34.8362 50.3153 34.9518 50.2982C35.0674 50.28 35.1854 50.285 35.299 50.3128C35.4127 50.3405 35.5197 50.3906 35.6139 50.4599C35.7081 50.5293 35.7875 50.6167 35.8477 50.717C35.9079 50.8174 35.9476 50.9286 35.9645 51.0444C36.2399 52.8832 37.8655 54.118 39.6422 53.8692C40.1219 53.7893 40.5749 54.1357 40.646 54.6243ZM52.1587 31.5456L53.3313 29.6357C53.5445 29.6802 53.7665 29.7157 53.9975 29.7157C55.8452 29.7157 57.3465 28.2144 57.3465 26.3667C57.3465 25.4785 56.9936 24.6267 56.3656 23.9986C55.7375 23.3706 54.8857 23.0177 53.9975 23.0177C53.1093 23.0177 52.2575 23.3706 51.6294 23.9986C51.0014 24.6267 50.6485 25.4785 50.6485 26.3667C50.6485 27.1484 50.9239 27.8413 51.3681 28.4187L50.5242 29.7779H46.8554V32.0875H51.1726C51.5813 32.0875 51.9544 31.8832 52.1587 31.5456Z" fill="#004F8F" />
                <path d="M59.6206 37.6936L62.863 33.9004C63.0407 33.6872 63.1384 33.4207 63.1384 33.1542V29.4943C64.4087 29.0235 65.3325 27.8065 65.3325 26.3674C65.3325 24.5286 63.8224 23.0273 61.9835 23.0273C61.0969 23.0273 60.2464 23.379 59.6186 24.0051C58.9908 24.6312 58.6369 25.4808 58.6346 26.3674C58.6346 27.8065 59.5495 29.0324 60.8287 29.4943V32.7278L58.2082 35.7926H46.8643V38.1022H58.7412C59.0787 38.1022 59.3985 37.9512 59.6206 37.6936Z" fill="#004F8F" />
                <path d="M60.3934 42.8085L64.9683 37.5585H67.9975C68.4683 38.8288 69.6853 39.7438 71.1244 39.7438C72.9721 39.7438 74.4734 38.2425 74.4734 36.3948C74.471 35.5081 74.1172 34.6586 73.4894 34.0324C72.8616 33.4063 72.0111 33.0547 71.1244 33.0547C69.6764 33.0547 68.4594 33.9785 67.9975 35.2489H64.4442C64.1066 35.2489 63.7868 35.391 63.5648 35.6397L58.9899 40.8897H46.8643V43.1994H59.5229C59.8604 43.1994 60.1802 43.0572 60.3934 42.8085ZM54.0064 62.476C53.7754 62.476 53.5533 62.5115 53.3401 62.556L52.1676 60.6461C51.9544 60.3085 51.5901 60.1042 51.1904 60.1042H46.8731V62.4138H50.5419L51.3769 63.773C50.9328 64.3415 50.6574 65.0433 50.6574 65.825C50.6574 66.7132 51.0102 67.565 51.6383 68.1931C52.2664 68.8211 53.1182 69.174 54.0064 69.174C54.8946 69.174 55.7464 68.8211 56.3745 68.1931C57.0025 67.565 57.3554 66.7132 57.3554 65.825C57.3554 63.9773 55.8541 62.476 54.0064 62.476Z" fill="#004F8F" />
                <path d="M63.1384 62.6997V59.0398C63.1384 58.7733 63.0407 58.5068 62.863 58.2847L59.6206 54.4915C59.3985 54.2428 59.0787 54.0918 58.7412 54.0918H46.8643V56.4014H58.2082L60.8287 59.4662V62.6997C59.5495 63.1705 58.6346 64.3875 58.6346 65.8266C58.6369 66.7132 58.9908 67.5628 59.6186 68.1889C60.2464 68.8151 61.0969 69.1667 61.9835 69.1667C63.8224 69.1667 65.3325 67.6654 65.3325 65.8266C65.3325 64.3875 64.4087 63.1616 63.1384 62.6997Z" fill="#004F8F" />
                <path d="M71.1244 52.4478C69.6853 52.4478 68.4683 53.3627 67.9975 54.6331H64.9683L60.3934 49.3831C60.1802 49.1343 59.8604 48.9922 59.5229 48.9922H46.8643V51.3018H58.9899L63.5648 56.5518C63.778 56.8006 64.0978 56.9427 64.4442 56.9427H67.9975C68.2304 57.5852 68.6554 58.1404 69.2149 58.533C69.7743 58.9255 70.441 59.1364 71.1244 59.1369C72.0111 59.1369 72.8616 58.7852 73.4894 58.1591C74.1172 57.533 74.471 56.6834 74.4734 55.7968C74.4734 53.949 72.9721 52.4478 71.1244 52.4478Z" fill="#004F8F" />
            </svg>
        ),
        subtitle: "Make confident decisions with enhanced data and advanced analytics",
        description: "Assess your borrowers with 2-4x more accurate risk ranking than generic models, and expand access to more consumers without increasing risk. AibuildIQ creates client-tailored machine learning models with ethically sourced, responsibly used data to ensure optimal performance and compliance.",
        content: [
            {
                title: "Effectively Evaluate 98%",
                description: " of American adults",
            },
            {
                title: "Lower Risk by Over 20%",
                description: " while maintaining approval levels",
            },
            {
                title: "Increase Approval Rates by 25% ",
                description: " with no extra risk",
            },
        ]
    },
];

const smartList = [
    { text: "Auto Mobile" },
    { text: "Credit Cards" },
    { text: "Home Equity" },
    { text: "Personal Loans" },
    { text: "SMB Loans" }
]


const Hero2 = () => {
    const [isActiveCard, setIsActiveCard] = useState(1);

    return (
        <div>
            <div className="w-full bg-white px-[10%] py-8">
                <div className="mx-auto w-[80%] md:w-[40%] my-8">
                    <h3 className="text-center text-2xl text-[#004F8F] font-bold">Build a Resilient Lending Business</h3>
                    <h3 className="text-center text-2xl text-[#004F8F] font-bold"><span className="text-black"> with reliable, intelligent automated decision-making</span></h3>
                </div>
                <div className="items-top items-center container ">
                    <div className="gap-4 lg:flex">
                        {Groups.map((card, index) => (
                            <div className={`bg-[#F2F4F5] my-4 rounded-lg mx-auto `} onClick={() => setIsActiveCard(index + 1)}>
                                <CardToggle
                                    isActive={isActiveCard === index + 1}
                                    title={card.title}
                                    subtitle={card.subtitle}
                                    description={card.description}
                                    number={index + 1}
                                    image={card.svg}
                                    content={card.content}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="items-center py-16 bg-gray-200">
                <div className="text-center w-1/2 md:w-1/3 mx-auto py-8">
                    <p className="text-[#004F8F] font-bold text-2xl">Make Smarter, Fairer, and Faster Decisions <span className="text-black">across your portfolios with cutting-edge AI</span></p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-2/3 mx-auto ">
                    {smartList.map((smart, index) => (
                        <div className="flex bg-white p-4 border-gray-300 rounded-lg items-center">
                            <div className="p-2 font-bold text-gray-200 border-r border-gray-200 text-2xl">{index + 1}</div>
                            <div className="p-2 font-bold">{smart.text}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="md:flex container mx-auto justify-center items-center py-8">
                <div className="md:w-1/2 pl-8 py-8">
                    <p className="text-2xl text-[#004F8F] font-bold py-4 w-1/2">Customization <span className="text-black">Over Standardization</span></p>
                    <p className="text-gray-500 py-4">Get AI-powered underwriting tailored to your borrowers and needs. AiBuildiQ serves everyone from large financial institutions to small credit unions, with machine learning models custom-built to scale, processing from just 100 to over 600,000 applications annually.</p>
                    <button className="bg-[#004F8F] text-white py-2 px-4 rounded-full">
                        See how we support and enhance your lending ecosystem
                    </button>
                </div>
                <div className="md:w-1/2 mb-8 md:mb-0 p-8 relative">
                    <Image
                        src={LeftImage.src}
                        alt="Risk evaluation"
                        width={500}
                        height={300}
                        style={{ height: '30vh', width: '100vw' }}
                        className="rounded-lg transition-opacity duration-300 hover:opacity-80 cursor-pointer border-4 border-white shadow-lg shadow-gray-300/50 backdrop-blur-sm"
                    />
                    <div className="absolute left-[15%] top-1/4 -z-10 rounded-lg border-2 border-gray-300" style={{ height: '26vh', width: '83%' }}></div>
                </div>
            </div>
        </div>
    );
};

export default Hero2;
