import React from "react";
import { useCartContext } from "../../../../../Context/CartContext";
import "./CartWidget.css";
import { Link } from "react-router-dom";

export default function CartWidget() {
  const { cart, totalProducts } = useCartContext();
  //const { handleShowCanvas, show} = useCartContext();

  return (
    <div>
      <Link to={"/cart"}>
        <button id="bag-button" type="button" class="btn position-relative">
          <span class="position-relative start-100 translate-middle badge px-1 pt-1 bag-pill bg-danger">
            {totalProducts()}
          </span>
          <svg
            className="BagImg"
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="12.000000pt"
            height="512.000000pt"
            viewBox="0 0 512.000000 512.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
              fill="#E74423"
              stroke="none"
            >
              <path
                d="M3483 4410 c-39 -16 -43 -40 -43 -270 l0 -221 25 -24 c23 -24 31 -25
135 -25 71 0 122 5 143 14 43 17 85 68 93 111 3 19 7 35 9 35 1 0 27 -11 57
-24 l54 -24 10 -64 10 -64 -56 -17 c-180 -53 -275 -246 -209 -423 21 -56 84
-131 139 -166 l25 -15 3 -511 3 -510 -183 -228 -183 -229 -429 -3 c-259 -1
-443 2 -465 8 -56 15 -114 63 -146 122 -41 75 -41 161 0 236 24 45 49 68 150
141 66 48 126 98 133 112 19 35 11 261 -11 312 -26 61 -71 111 -129 143 -52
28 -57 29 -221 32 -184 4 -208 -2 -221 -53 -8 -33 18 -83 47 -90 12 -2 89 -6
170 -7 l149 -3 34 -37 c19 -21 34 -47 34 -58 0 -20 -5 -20 -515 -20 -353 0
-515 3 -515 10 0 25 33 72 63 90 28 17 51 20 178 20 133 0 149 2 173 21 34 27
36 77 3 107 -22 21 -33 22 -173 22 -193 0 -237 -12 -309 -83 -49 -50 -85 -121
-85 -169 0 -14 -8 -18 -35 -18 l-35 0 0 455 0 455 29 0 c20 0 36 9 51 27 20
26 21 36 18 230 -3 178 -5 204 -21 220 -15 16 -43 19 -210 23 l-192 5 0 71 c0
60 -4 77 -27 112 -15 22 -49 54 -75 69 -62 36 -147 38 -210 5 l-43 -22 -42 22
c-58 30 -147 30 -203 1 -80 -42 -117 -106 -117 -200 l1 -63 -85 0 c-77 0 -87
-2 -109 -25 -24 -23 -25 -28 -25 -173 l0 -150 -35 -6 c-67 -13 -65 10 -65
-602 0 -528 1 -553 19 -575 l19 -24 536 -3 535 -3 -32 -58 c-30 -56 -34 -59
-97 -80 -154 -49 -293 -166 -382 -321 -14 -25 -54 -124 -88 -220 -56 -159 -62
-180 -57 -236 10 -139 122 -251 253 -253 l41 -1 17 -67 c58 -236 233 -415 467
-479 96 -26 244 -24 339 5 141 43 200 84 200 137 0 23 -8 38 -26 53 -35 28
-53 27 -123 -9 -60 -31 -170 -60 -226 -60 -52 0 -161 28 -219 55 -69 32 -158
113 -202 181 -27 42 -74 156 -74 179 0 3 49 5 108 5 l108 0 12 -33 c19 -53 78
-113 140 -144 143 -70 325 -7 388 136 l18 41 103 0 c100 0 103 -1 103 -22 0
-13 -12 -50 -25 -83 -31 -75 -31 -100 0 -130 27 -27 41 -30 80 -15 32 12 69
91 92 194 22 103 27 106 199 106 193 0 227 -11 317 -102 38 -38 80 -74 94 -79
13 -5 146 -9 294 -9 l269 0 0 -30 0 -30 -229 0 c-216 0 -230 -1 -255 -21 -36
-28 -36 -80 0 -108 26 -20 39 -21 306 -21 l279 0 24 25 c22 22 25 32 25 105
l0 80 259 0 258 0 23 -62 c87 -239 332 -393 570 -360 138 20 227 64 326 162
88 87 153 240 154 359 0 37 2 42 18 36 48 -20 70 -22 100 -10 38 16 50 54 58
175 15 219 -92 432 -279 558 -40 26 -106 59 -146 72 l-73 23 6 36 c3 20 1 65
-4 99 -13 76 -114 339 -142 370 -37 38 -96 26 -117 -26 -11 -25 -6 -43 44
-169 30 -78 60 -164 65 -192 11 -60 0 -133 -29 -188 -11 -21 -134 -186 -273
-368 -187 -244 -262 -335 -288 -347 -32 -17 -83 -18 -610 -18 l-575 0 -53 54
c-93 95 -199 136 -349 136 -73 0 -75 1 -69 23 37 128 -5 330 -98 470 -77 115
-207 220 -334 267 -56 21 -407 95 -507 106 l-56 7 32 33 c64 66 47 65 732 62
l618 -3 -101 -73 c-56 -41 -116 -95 -135 -120 -153 -208 -81 -495 153 -605
l67 -32 470 -3 470 -3 43 23 c56 30 422 485 441 548 9 31 12 170 10 538 l-1
497 28 0 c27 0 30 -6 111 -210 89 -227 112 -262 162 -250 33 7 61 40 61 71 0
13 -31 103 -70 199 -73 182 -77 195 -60 195 6 0 10 -6 10 -13 0 -22 44 -57 72
-57 46 0 71 30 76 93 l4 56 39 6 c62 11 129 62 161 124 72 139 0 303 -151 342
l-49 12 -4 55 c-6 62 -30 92 -77 92 -28 0 -71 -36 -71 -58 0 -8 -23 -12 -70
-12 -38 0 -70 1 -70 3 -9 69 -41 221 -49 230 -6 8 -62 36 -125 63 l-114 49 -4
62 c-4 67 -21 100 -72 137 -24 18 -44 21 -144 23 -64 2 -127 -1 -139 -7z m207
-265 l0 -125 -50 0 -50 0 0 125 0 125 50 0 50 0 0 -125z m-3127 -16 c32 -17
37 -28 37 -81 l0 -48 -44 0 c-57 0 -89 25 -89 70 0 22 7 39 22 52 27 21 44 23
74 7z m290 0 c30 -16 37 -28 37 -66 0 -43 -30 -63 -93 -63 l-50 0 5 52 c8 74
48 105 101 77z m-253 -379 l0 -100 -175 0 -175 0 0 100 0 100 175 0 175 0 0
-100z m710 0 l0 -100 -280 0 -280 0 0 100 0 100 280 0 280 0 0 -100z m2694
-67 c3 -10 8 -40 12 -67 12 -88 78 -123 129 -71 27 26 29 44 16 113 l-8 42 58
0 59 0 0 -171 0 -170 -162 3 c-152 3 -165 5 -196 26 -72 52 -92 151 -47 229
38 63 127 106 139 66z m465 -89 c49 -41 41 -112 -16 -142 -12 -7 -24 -12 -27
-12 -3 0 -6 41 -6 90 0 50 4 90 9 90 5 0 23 -12 40 -26z m-3869 -194 l0 -100
-225 0 -225 0 0 100 0 100 225 0 225 0 0 -100z m610 0 l0 -100 -230 0 -230 0
0 93 c0 52 3 97 7 100 3 4 107 7 230 7 l223 0 0 -100z m-610 -355 l0 -105
-225 0 -225 0 0 105 0 105 225 0 225 0 0 -105z m608 -3 l3 -102 -228 2 -228 3
-3 89 c-2 49 -1 95 2 103 5 11 49 13 228 11 l223 -3 3 -103z m-608 -352 l0
-100 -225 0 -225 0 0 100 0 100 225 0 225 0 0 -100z m610 0 l0 -100 -227 2
-228 3 -3 98 -3 97 231 0 230 0 0 -100z m289 -545 c255 -51 317 -76 407 -158
113 -102 177 -239 178 -378 1 -64 -3 -81 -24 -112 -13 -20 -41 -45 -61 -56
-36 -21 -50 -21 -674 -21 -572 0 -640 2 -665 16 -34 21 -60 63 -60 101 0 42
104 326 142 390 41 69 143 165 211 200 149 76 241 79 546 18z m3222 -261 c146
-79 249 -252 249 -419 l0 -44 -72 25 c-105 36 -347 101 -472 127 l-107 23 107
139 c59 77 115 154 126 171 l19 32 48 -13 c27 -7 73 -26 102 -41z m-546 -533
c-80 -156 46 -355 224 -355 64 1 117 20 163 62 76 68 105 173 74 262 -8 24
-14 46 -12 48 2 2 38 -7 80 -19 88 -26 92 -32 83 -132 -8 -101 -41 -173 -111
-242 -68 -68 -123 -97 -213 -115 -191 -38 -394 97 -444 294 -11 45 -11 47 22
84 19 21 56 66 82 101 33 42 52 60 59 53 6 -6 4 -20 -7 -41z m288 -31 c15 -12
29 -35 32 -53 19 -100 -100 -163 -167 -88 -16 17 -28 39 -28 48 0 12 10 6 34
-20 82 -90 184 3 110 100 -28 37 -20 43 19 13z m-2963 -59 c0 -13 -82 -51
-111 -51 -28 0 -91 31 -97 48 -3 9 26 12 102 12 58 0 106 -4 106 -9z"
              />
              <path
                d="M1076 1968 c-32 -29 -126 -235 -126 -276 0 -21 8 -37 26 -51 60 -47
94 -18 167 142 51 110 56 127 46 154 -9 29 -44 53 -74 53 -8 0 -25 -10 -39
-22z"
              />
              <path
                d="M1346 1979 c-23 -14 -136 -250 -136 -285 0 -32 42 -74 73 -74 14 0
34 8 45 18 23 20 132 253 132 283 0 27 -44 69 -72 69 -13 0 -31 -5 -42 -11z"
              />
              <path
                d="M1602 1973 c-23 -21 -132 -254 -132 -284 0 -26 44 -69 70 -69 12 0
31 5 42 11 24 13 138 248 138 285 0 32 -42 74 -73 74 -14 0 -34 -8 -45 -17z"
              />
              <path
                d="M4168 2133 c-15 -16 -117 -143 -227 -283 -167 -212 -201 -260 -201
-287 0 -59 67 -95 113 -60 38 29 447 561 447 582 0 12 -9 34 -21 49 -28 36
-76 36 -111 -1z"
              />
            </g>
          </svg>
        </button>
      </Link>
    </div>
  );
}
