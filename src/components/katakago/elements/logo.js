import Image from 'next/image'

import logo from '@/assets/katakago/logo.svg'

export default function Logo({ type = 'logo' }) {
	const logos = {
		katakago: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 222.44 42.96"
				className="katakago"
				fill="currentColor"
			>
				<path d="M16.9 15.24c1.61-2.06 2.83-4.4 3.67-7.03.84-2.62 1.26-5.36 1.26-8.22h-5.5c0 2.1-.25 4.13-.76 6.1s-1.28 3.74-2.33 5.3-2.38 2.81-4 3.73c-1.11.64-2.38 1.04-3.78 1.24V0H0v32.14h5.46V21.76c2-.24 3.84-.77 5.51-1.63l5.78 12.01h6.61L15.5 16.82c.49-.5.96-1.02 1.4-1.58zm29.91 2.55c0-3.17-1.02-5.58-3.06-7.23S38.6 8.05 34.4 7.99l-5.07-.07-.45 5.05 5.98.16c2.19.06 3.83.42 4.93 1.08s1.65 1.69 1.65 3.09v.5l-1.18-.23c-1.03-.15-2.22-.23-3.58-.23-3.43 0-6.07.7-7.94 2.11s-2.81 3.42-2.81 6.04c0 2.26.7 4.01 2.09 5.25s3.36 1.86 5.9 1.86c1.52 0 2.84-.23 3.94-.69s1.96-1.15 2.57-2.08c.5-.76.8-1.68.91-2.75h.53l.32 5.3 8.24-.23v-4.53l-3.62-.5v-9.33zm-5.37 5.07c0 .83-.23 1.63-.7 2.41s-1.17 1.42-2.11 1.92-2.1.76-3.49.76c-1.19 0-2.1-.24-2.73-.72s-.94-1.18-.94-2.1c0-2.1 1.78-3.15 5.34-3.15l2.65.06c.62.03 1.28.12 1.97.25v.58zm30.83 4.4l-2.29.12c-2.16 0-3.71-.42-4.64-1.27-.94-.85-1.4-2.2-1.4-4.05v-8.85h10.75V8.14H63.94V.91h-5.57v7.24h-5.86v5.07h5.86v9.3c0 3.52.88 6.07 2.62 7.67s4.6 2.4 8.53 2.4l3.09-.14 2.98-.41-.54-5.12-2.78.33zm28.86-9.47c0-3.17-1.02-5.58-3.06-7.23s-5.15-2.51-9.35-2.57l-5.07-.07-.45 5.05 5.98.16c2.19.06 3.83.42 4.93 1.08s1.65 1.69 1.65 3.09v.5l-1.18-.23c-1.03-.15-2.22-.23-3.58-.23-3.43 0-6.07.7-7.94 2.11s-2.81 3.42-2.81 6.04c0 2.26.7 4.01 2.09 5.25s3.36 1.86 5.9 1.86c1.52 0 2.84-.23 3.94-.69s1.96-1.15 2.57-2.08c.5-.76.8-1.68.91-2.75h.53l.32 5.3 8.24-.23v-4.53l-3.62-.5v-9.33zm-5.37 5.07c0 .83-.23 1.63-.7 2.41s-1.17 1.42-2.11 1.92-2.1.76-3.49.76c-1.19 0-2.1-.24-2.73-.72s-.94-1.18-.94-2.1c0-2.1 1.78-3.15 5.34-3.15l2.65.06c.62.03 1.28.12 1.97.25v.58zm11.76-3.3h8.36v5.07h-8.36zm29.19-4.32c1.61-2.06 2.83-4.4 3.67-7.03.84-2.62 1.26-5.36 1.26-8.22h-5.5c0 2.1-.25 4.13-.76 6.1s-1.28 3.74-2.33 5.3-2.38 2.81-3.99 3.73c-1.11.64-2.38 1.04-3.78 1.24V0h-5.46v32.14h5.46V21.76c2-.24 3.84-.77 5.51-1.63l5.78 12.01h6.61l-7.86-15.32c.49-.5.96-1.02 1.4-1.58zm29.91 2.55c0-3.17-1.02-5.58-3.06-7.23s-5.15-2.51-9.35-2.57l-5.07-.07-.45 5.05 5.98.16c2.19.06 3.83.42 4.93 1.08s1.65 1.69 1.65 3.09v.5l-1.18-.23c-1.03-.15-2.22-.23-3.58-.23-3.43 0-6.07.7-7.95 2.11s-2.81 3.42-2.81 6.04c0 2.26.7 4.01 2.09 5.25 1.4 1.24 3.36 1.86 5.9 1.86 1.53 0 2.84-.23 3.94-.69s1.96-1.15 2.57-2.08c.5-.76.8-1.68.91-2.75h.53l.32 5.3 8.24-.23v-4.53l-3.62-.5v-9.33zm-5.37 5.07c0 .83-.23 1.63-.7 2.41s-1.17 1.42-2.11 1.92-2.1.76-3.49.76c-1.19 0-2.1-.24-2.73-.72s-.94-1.18-.94-2.1c0-2.1 1.78-3.15 5.34-3.15l2.65.06c.62.03 1.28.12 1.97.25v.58zm27.78-10.37h-.38c-.24-1.57-.88-2.76-1.91-3.58-1.04-.81-2.47-1.22-4.31-1.22-3.06 0-5.41 1.08-7.05 3.24s-2.46 5.27-2.46 9.33.82 7.05 2.46 9.17c1.64 2.11 3.98 3.17 7.03 3.17 1.74 0 3.13-.41 4.19-1.22s1.69-2.01 1.9-3.58h.47v2.94c-.02 2.28-.53 4-1.54 5.17s-2.63 1.79-4.87 1.87l-7.7.23.23 4.96 7.02-.23c4.33-.15 7.49-1.24 9.47-3.27s2.98-5.18 2.98-9.45V8.15h-5.14l-.39 4.35zm-1.26 13.29c-.8 1.15-2.11 1.72-3.92 1.72s-3.05-.61-3.94-1.83-1.33-3.03-1.33-5.41.45-4.26 1.36-5.54 2.21-1.92 3.92-1.92 2.96.58 3.83 1.73c.86 1.15 1.29 2.92 1.29 5.31v.66c0 2.38-.4 4.15-1.2 5.3zm31.86-14.84c-1.87-2.17-4.51-3.25-7.92-3.25s-6.03 1.08-7.91 3.25-2.82 5.23-2.82 9.2.94 7.02 2.82 9.19 4.52 3.26 7.91 3.26 6.05-1.09 7.92-3.26 2.81-5.24 2.81-9.19-.94-7.04-2.81-9.2zm-4.23 14.55c-.86 1.26-2.09 1.89-3.69 1.89s-2.81-.63-3.68-1.89-1.3-3.04-1.3-5.35.43-4.11 1.3-5.36 2.09-1.88 3.68-1.88 2.81.63 3.68 1.88 1.3 3.04 1.3 5.36-.43 4.09-1.29 5.35z" />
			</svg>
		),
		// グラデーションを使ったSVGを埋め込むとページ遷移時にSafariで表示されなくなる問題が生じたため、Imageを使用
		logo: <Image src={logo} alt="Kata-Kago" />,
		logoSvg: (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 338.156 192.445">
				<defs>
					<linearGradient
						id="katakagoLogo"
						x1="0.5"
						x2="0.5"
						y2="1"
						gradientUnits="objectBoundingBox"
					>
						<stop offset="0" stop-color="#00a2ff" />
						<stop offset="1" stop-color="#063454" />
					</linearGradient>
				</defs>
				<g fill="url(#katakagoLogo)" transform="translate(-550.922 -259.342)">
					<path
						d="M127.831 4.281L123.017 0 118.2 4.281C116.491 5.8 76.17 42.049 76.17 88.073s40.3 82.273 42.033 83.792l4.814 4.281 4.814-4.281c1.712-1.519 42.033-37.769 42.033-83.792S129.544 5.8 127.831 4.281zM123.017 156.2c-10.048-10.581-32.308-37.478-32.308-68.122s22.261-57.541 32.308-68.122c10.048 10.581 32.308 37.478 32.308 68.122s-22.26 57.536-32.308 68.122z"
						transform="translate(597.807 259.342)"
					></path>
					<path
						d="M96.638 70.221C62.811 39.043 8.823 44.1 6.545 44.325l-6.413.646L0 51.417c-.048 2.294-.711 56.507 33.116 87.685 25.136 23.165 61.37 26.331 79.285 26.331 6.2 0 10.209-.388 10.807-.436l6.413-.646.129-6.446c.048-2.294.711-56.508-33.116-87.685zm-53.648 58.2C20.454 107.65 15.769 73.048 14.8 58.493c14.6-.226 49.448 1.648 71.983 22.422s27.22 55.377 28.189 69.932c-14.587.21-49.448-1.648-71.983-22.422z"
						transform="translate(550.927 286.354)"
					></path>
					<path
						d="M258.754 51.418l-.129-6.446-6.413-.646c-2.278-.226-56.249-5.3-90.092 25.9-33.828 31.174-33.166 85.387-33.12 87.681l.129 6.446 6.413.646c.582.065 4.588.436 10.807.436 17.915 0 54.165-3.166 79.285-26.331 33.827-31.178 33.165-85.391 33.116-87.685zm-42.97 77.007c-22.535 20.774-57.412 22.632-71.983 22.422.969-14.571 5.654-49.157 28.189-69.932s57.38-22.632 71.983-22.422c-.973 14.572-5.654 49.158-28.19 69.932z"
						transform="translate(630.316 286.353)"
					></path>
				</g>
			</svg>
		),
		logoFill: (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66.161 39.847">
				<defs>
					<linearGradient
						id="a"
						x1="0.5"
						x2="0.5"
						y1="0.122"
						y2="1.44"
						gradientUnits="objectBoundingBox"
					>
						<stop offset="0" className="katakago0"></stop>
						<stop offset="1" className="katakago1"></stop>
					</linearGradient>
					<clipPath id="logoFillB">
						<path fill="url(#logoFillA)" d="M0 0H66.161V39.847H0z"></path>
					</clipPath>
				</defs>
				<g fill="url(#logoFillA)" clipPath="url(#logoFillB)">
					<path
						d="M66.163 17.795c0 9.828 8.989 17.795 8.989 17.795s8.989-7.967 8.989-17.795S75.152 0 75.152 0s-8.989 7.967-8.989 17.795"
						transform="translate(-41.888)"
					></path>
					<path
						d="M6.992 61.15c7.226 6.661 19.176 5.45 19.176 5.45s.235-12.009-6.991-18.67S0 42.48 0 42.48s-.234 12.009 6.992 18.67"
						transform="translate(0 -26.84)"
					></path>
					<path
						d="M128.178 61.15C120.952 67.811 109 66.6 109 66.6s-.235-12.009 6.991-18.67 19.177-5.451 19.177-5.451.234 12.009-6.992 18.67"
						transform="translate(-69.008 -26.84)"
					></path>
					<path
						d="M66.163 17.795c0 9.828 8.989 17.795 8.989 17.795s8.989-7.967 8.989-17.795S75.152 0 75.152 0s-8.989 7.967-8.989 17.795"
						transform="translate(-41.888)"
					></path>
					<path
						d="M6.992 61.15c7.226 6.661 19.176 5.45 19.176 5.45s.235-12.009-6.991-18.67S0 42.48 0 42.48s-.234 12.009 6.992 18.67"
						transform="translate(0 -26.84)"
					></path>
					<path
						d="M128.178 61.15C120.952 67.811 109 66.6 109 66.6s-.235-12.009 6.991-18.67 19.177-5.451 19.177-5.451.234 12.009-6.992 18.67"
						transform="translate(-69.008 -26.84)"
					></path>
				</g>
			</svg>
		),
		logoSubText: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="385.402"
				height="22.75"
				viewBox="0 0 385.402 22.75"
				fill="currentColor"
			>
				<path
					d="M-173.656-19.292a.585.585,0,0,0-.84.056.611.611,0,0,0,.084.84c1.2,1.008,1.988,1.82,2.016,1.82a.609.609,0,0,0,.84,0,.609.609,0,0,0,0-.84C-171.612-17.444-172.424-18.256-173.656-19.292ZM-172-21.336a.583.583,0,0,0-.84.056.586.586,0,0,0,.084.84c1.176,1.008,1.988,1.792,1.988,1.82a.609.609,0,0,0,.84,0,.561.561,0,0,0,0-.84A21.166,21.166,0,0,0-172-21.336Zm-11.06,2.464c-1.4.2-2.744.392-3.864.448a5.617,5.617,0,0,1-1.428-.28.737.737,0,0,0-.952.448.718.718,0,0,0,.448.924,5.769,5.769,0,0,0,1.988.392c1.2-.056,2.576-.252,4-.448a26.028,26.028,0,0,1,6.384-.42.736.736,0,0,0,.84-.644.75.75,0,0,0-.644-.84A28.856,28.856,0,0,0-183.064-18.872Zm-8.316,6.132a9.377,9.377,0,0,0,2.324.448c1.792-.028,3.976-.28,6.272-.56a49.654,49.654,0,0,1,9.632-.532.744.744,0,0,0,.812-.644.734.734,0,0,0-.672-.812,48.158,48.158,0,0,0-9.94.532c-2.268.252-4.4.5-6.132.532a6.7,6.7,0,0,1-1.792-.364.737.737,0,0,0-.952.448A.737.737,0,0,0-191.38-12.74Zm3.416,11.2c-.308.308-.7.728-.336,1.232a.9.9,0,0,0,.56.28.945.945,0,0,0,.616-.252l.2-.2a23.645,23.645,0,0,0,5.824-8.68,4.9,4.9,0,0,0-.112-2.492.745.745,0,0,0-.9-.532.79.79,0,0,0-.532.924,3.7,3.7,0,0,1,.14,1.624A21.857,21.857,0,0,1-187.964-1.54Zm42.9-15.6a.609.609,0,0,0,.84,0,.609.609,0,0,0,0-.84c-.028-.028-.84-.84-2.1-1.876a.574.574,0,0,0-.812.056.583.583,0,0,0,.056.84C-145.88-17.948-145.068-17.136-145.068-17.136Zm-.448-4.7a.611.611,0,0,0,.084.84c1.2,1.008,1.988,1.792,2.016,1.82a.609.609,0,0,0,.84,0,.609.609,0,0,0,0-.84c-.056-.028-.868-.868-2.1-1.876A.585.585,0,0,0-145.516-21.84ZM-163.688-14a5.269,5.269,0,0,0,2.576.7c.84-.056,1.876-.112,3-.224.028,2.212-.056,4.172-.056,4.2a.724.724,0,0,0,.7.756.73.73,0,0,0,.784-.7c0-.112.084-2.128.056-4.368,1.036-.084,2.1-.168,3.164-.252l1.764-.168c-.588,4.452-2.044,9.828-4.788,12.656a.719.719,0,0,0,.028,1.036.719.719,0,0,0,1.036-.028c3.024-3.108,4.62-9.044,5.236-13.776,2.464-.2,4.592-.364,5.4-.308a.755.755,0,0,0,.812-.7.789.789,0,0,0-.7-.784,53.26,53.26,0,0,0-5.348.28c.084-.952.112-1.848.112-2.6a5.851,5.851,0,0,0-.812-2.576.757.757,0,0,0-1.008-.252.74.74,0,0,0-.252,1.036,4.335,4.335,0,0,1,.588,1.792,24.974,24.974,0,0,1-.14,2.744c-.672.056-1.372.112-2.072.168l-3.052.252c-.028-.784-.056-1.54-.14-2.212a12.059,12.059,0,0,0-.588-2.408.737.737,0,0,0-.952-.448.7.7,0,0,0-.448.924,15.649,15.649,0,0,1,.532,2.072c.056.672.112,1.428.112,2.184-1.12.112-2.184.168-3.052.224a4.019,4.019,0,0,1-1.764-.5.759.759,0,0,0-1.008.28A.734.734,0,0,0-163.688-14Zm30.744,6.5a107.919,107.919,0,0,0,11.7-9.6,2.7,2.7,0,0,0,.28-3.78A.745.745,0,0,0-122-20.972a.749.749,0,0,0-.112,1.036,1.187,1.187,0,0,1-.168,1.736,107.548,107.548,0,0,1-11.508,9.492.723.723,0,0,0-.2,1.008A.756.756,0,0,0-132.944-7.5Zm8.176,6.944a.73.73,0,0,0,.756-.728l.14-8.54a6.552,6.552,0,0,0-.28-1.932.731.731,0,0,0-.9-.5.749.749,0,0,0-.5.924,6.2,6.2,0,0,1,.2,1.484l-.112,8.54A.724.724,0,0,0-124.768-.56Zm18.564-17a.733.733,0,0,0,.476.924,14,14,0,0,1,3.864,2.352.757.757,0,0,0,1.064-.112.748.748,0,0,0-.084-1.036,16.172,16.172,0,0,0-4.368-2.6A.752.752,0,0,0-106.2-17.556Zm17.92.924a.756.756,0,0,0-1.036.2C-91.5-13.16-100.688-5.18-103.656-3.668c-.308-.028-1.148-.924-1.68-1.848a.747.747,0,0,0-1.008-.28.773.773,0,0,0-.28,1.036c.448.756,2.044,3.192,3.612,2.408C-99.876-3.92-90.412-12.1-88.088-15.6A.756.756,0,0,0-88.284-16.632Zm22.12,1.848v.14a.774.774,0,0,0,.588.728c2.38.476,4.956,2.184,5.1,4.172a9.685,9.685,0,0,1-3.3.812.757.757,0,0,0-.644.756v.084a.713.713,0,0,0,.812.644c3.108-.336,4.676-1.092,4.648-2.212-.056-2.8-3.248-5.1-6.328-5.712A.731.731,0,0,0-66.164-14.784ZM-79.156-1.4A35.115,35.115,0,0,0-73-12.824a4.2,4.2,0,0,1,2.24.14c.448.2.588.98.644,1.456a5.623,5.623,0,0,1,.028.7c0,2.772-1.4,6.524-2.016,6.972-1.036.336-2.184-1.26-2.212-1.288a.726.726,0,0,0-1.036-.168A.723.723,0,0,0-75.544-4c.084.112,1.82,2.632,3.976,1.848,1.512-.56,2.884-5.376,2.968-8.12.056-2.548-.812-3.444-1.568-3.78a5,5,0,0,0-2.324-.308c.28-.952.56-1.932.812-2.968a4.129,4.129,0,0,0-.644-3.3.746.746,0,0,0-1.036-.112.777.777,0,0,0-.14,1.036,2.5,2.5,0,0,1,.364,2.044c-.28,1.26-.616,2.436-.98,3.556-.476.112-.924.224-1.372.336-1.232.336-2.492.672-3.024.364a.743.743,0,0,0-1.008.308.759.759,0,0,0,.28,1.008c1.092.56,2.576.168,4.144-.252.112-.028.252-.056.392-.084A34.909,34.909,0,0,1-80.248-2.38a.719.719,0,0,0,.056,1.036A.719.719,0,0,0-79.156-1.4Zm36.26-.308a.749.749,0,0,0-.784.7.749.749,0,0,0,.7.784,9.9,9.9,0,0,0,7.252-2.184A5.2,5.2,0,0,0-34.1-6.272a4.694,4.694,0,0,0-2.856-4.676c-2.716-1.008-6.272.56-9.492,4.228v-.2l.112-.868c.2-1.456.532-4.172.616-6.076.084-1.4,1.288-1.624,3.836-1.624,1.372-.028,2.548-.028,2.912-.924a3.217,3.217,0,0,0,.2-1.008,2.34,2.34,0,0,0-.364-1.26c-.7-1.2-2.436-2.072-4.788-2.38a.755.755,0,0,0-.84.644v.112a.75.75,0,0,0,.644.728c1.848.252,3.248.868,3.724,1.652a1.141,1.141,0,0,1,.14.5.746.746,0,0,1-.084.336,7.521,7.521,0,0,1-1.54.112c-1.932,0-5.152,0-5.292,3.024-.112,1.848-.448,4.536-.616,5.992l-.112.868a1.05,1.05,0,0,0-.028.28,1.528,1.528,0,0,0,.868,1.512,1.46,1.46,0,0,0,1.652-.364c3.332-3.808,6.272-4.508,7.924-3.892a3.186,3.186,0,0,1,1.9,3.276,3.721,3.721,0,0,1-1.176,2.8A8.425,8.425,0,0,1-42.9-1.708Zm21.952-12.908a10.7,10.7,0,0,0,2.632.5c1.6-.028,3.752-.2,5.852-.392a53.284,53.284,0,0,1,5.4-.336c-.2,1.176-1.092,6.636-1.316,7.952-1.96.028-3.64.14-5.124.224-1.624.112-3.024.224-4.536.2a7.77,7.77,0,0,1-1.96-.392.722.722,0,0,0-.924.476.733.733,0,0,0,.476.924,9.684,9.684,0,0,0,2.38.476c1.568.028,3.08-.084,4.676-.2,1.736-.112,3.724-.252,6.188-.252A.747.747,0,0,0-6.44-6.16a.742.742,0,0,0-.448-.672l1.428-8.6a.771.771,0,0,0-.14-.56.809.809,0,0,0-.5-.308,45.75,45.75,0,0,0-6.5.308c-2.044.2-4.172.392-5.712.392a8.545,8.545,0,0,1-2.184-.448.749.749,0,0,0-.924.5A.712.712,0,0,0-20.944-14.616Zm24.92,2.464A.744.744,0,0,0,4-11.116,4.532,4.532,0,0,0,6.86-9.94l3.836-.252c4.228-.308,10.584-.756,12.572-.42a.753.753,0,0,0,.868-.588.757.757,0,0,0-.616-.868c-2.156-.392-8.4.056-12.936.392l-3.808.252a3.139,3.139,0,0,1-1.764-.784A.72.72,0,0,0,3.976-12.152Zm46.368-7.14a.585.585,0,0,0-.84.056.611.611,0,0,0,.084.84c1.2,1.008,1.988,1.82,2.016,1.82a.609.609,0,0,0,.84,0,.609.609,0,0,0,0-.84C52.388-17.444,51.576-18.256,50.344-19.292ZM52-21.336a.583.583,0,0,0-.84.056.586.586,0,0,0,.084.84c1.176,1.008,1.988,1.792,1.988,1.82a.609.609,0,0,0,.84,0,.561.561,0,0,0,0-.84A21.168,21.168,0,0,0,52-21.336Zm-11.06,2.464c-1.4.2-2.744.392-3.864.448a5.617,5.617,0,0,1-1.428-.28.737.737,0,0,0-.952.448.718.718,0,0,0,.448.924,5.769,5.769,0,0,0,1.988.392c1.2-.056,2.576-.252,4-.448a26.028,26.028,0,0,1,6.384-.42.736.736,0,0,0,.84-.644.75.75,0,0,0-.644-.84A28.856,28.856,0,0,0,40.936-18.872ZM32.62-12.74a9.377,9.377,0,0,0,2.324.448c1.792-.028,3.976-.28,6.272-.56a49.654,49.654,0,0,1,9.632-.532.744.744,0,0,0,.812-.644.734.734,0,0,0-.672-.812,48.158,48.158,0,0,0-9.94.532c-2.268.252-4.4.5-6.132.532a6.7,6.7,0,0,1-1.792-.364.737.737,0,0,0-.952.448A.737.737,0,0,0,32.62-12.74Zm3.416,11.2c-.308.308-.7.728-.336,1.232a.9.9,0,0,0,.56.28.945.945,0,0,0,.616-.252l.2-.2A23.645,23.645,0,0,0,42.9-9.156a4.9,4.9,0,0,0-.112-2.492.745.745,0,0,0-.9-.532.79.79,0,0,0-.532.924,3.7,3.7,0,0,1,.14,1.624A21.857,21.857,0,0,1,36.036-1.54ZM64.288-4.788a84.8,84.8,0,0,0,9.352-7.728,2.265,2.265,0,0,0,.252-3.136.731.731,0,0,0-.98-.084.7.7,0,0,0-.084.98.874.874,0,0,1-.14,1.26A85.176,85.176,0,0,1,63.5-5.936a.712.712,0,0,0-.2.952A.714.714,0,0,0,64.288-4.788ZM70.756.7a.652.652,0,0,0,.728-.616l.084-6.832a5.789,5.789,0,0,0-.2-1.568.732.732,0,0,0-.868-.476.732.732,0,0,0-.476.868A3.526,3.526,0,0,1,70.2-6.748l-.084,6.8A.633.633,0,0,0,70.756.7ZM89.8-17.556a.733.733,0,0,0,.476.924,14,14,0,0,1,3.864,2.352.757.757,0,0,0,1.064-.112.748.748,0,0,0-.084-1.036,16.172,16.172,0,0,0-4.368-2.6A.752.752,0,0,0,89.8-17.556Zm17.92.924a.756.756,0,0,0-1.036.2C104.5-13.16,95.312-5.18,92.344-3.668c-.308-.028-1.148-.924-1.68-1.848a.747.747,0,0,0-1.008-.28.773.773,0,0,0-.28,1.036c.448.756,2.044,3.192,3.612,2.408,3.136-1.568,12.6-9.744,14.924-13.244A.756.756,0,0,0,107.716-16.632Zm11.312,5.8a.753.753,0,0,0-.056,1.064.744.744,0,0,0,1.036.028,18.911,18.911,0,0,0,4.984-7.56,4.115,4.115,0,0,0-.56-2.912.75.75,0,0,0-1.008-.252.732.732,0,0,0-.252,1.008,2.987,2.987,0,0,1,.42,1.708A18.394,18.394,0,0,1,119.028-10.836Zm1.708,9.716c.336-.168,8.54-3.948,12.068-15.512a.75.75,0,0,0-.14-.644.783.783,0,0,0-.616-.308l-5.712.252a.78.78,0,0,0-.672.84.656.656,0,0,0,.728.644s3.22-.14,4.648-.2C127.568-5.964,120.2-2.52,120.12-2.492a.77.77,0,0,0-.42.7.5.5,0,0,0,.056.28A.729.729,0,0,0,120.736-1.12ZM136.248-16.6a.609.609,0,0,0,0-.84c-.056-.028-.868-.868-2.1-1.876a.585.585,0,0,0-.84.056.611.611,0,0,0,.084.84c1.2,1.008,1.988,1.792,2.016,1.82A.609.609,0,0,0,136.248-16.6Zm.784-2.072a.561.561,0,0,0,.84,0,.531.531,0,0,0,0-.812,23.555,23.555,0,0,0-2.072-1.9.611.611,0,0,0-.84.084.61.61,0,0,0,.056.84C136.22-19.488,137.032-18.676,137.032-18.676Zm22.484,1.9a.726.726,0,0,0,.252-1.008.726.726,0,0,0-1.008-.252,15.341,15.341,0,0,1-3.612,1.372c0-.588.028-1.148.028-1.568v-.084A4.9,4.9,0,0,0,154-20.86a.724.724,0,0,0-1.036-.112.788.788,0,0,0-.28.588.745.745,0,0,0,.168.448,3.772,3.772,0,0,1,.84,1.624v.028c0,.5-.028,1.148-.028,1.876a5.066,5.066,0,0,1-4.032-1.176.721.721,0,0,0-1.036.056.719.719,0,0,0,.028,1.036,6.334,6.334,0,0,0,5.04,1.568c-.028.476-.028.952-.028,1.456,0,.56,0,1.148.028,1.736a13.517,13.517,0,0,1-3.92-.308c-1.456-.364-1.624-1.288-1.624-1.316a.767.767,0,0,0-.84-.616.749.749,0,0,0-.644.812,3.291,3.291,0,0,0,2.744,2.548,13.992,13.992,0,0,0,4.284.364c0,1.316,0,2.576.028,3.612a9.478,9.478,0,0,0-5.348.084,2.872,2.872,0,0,0-1.932,2.744c0,2.072,2.3,3.192,4.452,3.192a4.949,4.949,0,0,0,2.884-.84,3.324,3.324,0,0,0,1.428-2.856v-.336a16.628,16.628,0,0,1,6.16,3.7.719.719,0,0,0,1.036,0,.765.765,0,0,0,.224-.532.753.753,0,0,0-.224-.5,18.039,18.039,0,0,0-7.2-4.228c-.028-1.148-.028-2.6-.028-4.172a10.942,10.942,0,0,0,6.44-2.828.752.752,0,0,0-.028-1.064.719.719,0,0,0-1.036.028,9.628,9.628,0,0,1-5.4,2.352v-3.22A16.188,16.188,0,0,0,159.516-16.772ZM152.908-2.66a3.527,3.527,0,0,1-2.044.56c-1.428,0-2.968-.672-2.968-1.708A1.375,1.375,0,0,1,148.9-5.18a8.434,8.434,0,0,1,4.788.084v.784A1.933,1.933,0,0,1,152.908-2.66Zm38.808-8.064a.609.609,0,0,0,0-.84c-.056-.028-.868-.84-2.1-1.876a.588.588,0,0,0-.84.084.577.577,0,0,0,.084.812c1.2,1.008,1.988,1.82,2.016,1.82A.609.609,0,0,0,191.716-10.724Zm-1.288-4.7a.608.608,0,0,0,.056.84,25.32,25.32,0,0,1,2.016,1.82.609.609,0,0,0,.84,0,.561.561,0,0,0,0-.84,26.406,26.406,0,0,0-2.072-1.876A.583.583,0,0,0,190.428-15.428Zm-14.98-.2c10.192-2.156,16.016-1.484,16.072-1.484a.736.736,0,0,0,.84-.644.744.744,0,0,0-.644-.812c-.252-.028-6.1-.728-16.576,1.484a3.124,3.124,0,0,1-2.24-.308.723.723,0,0,0-1.008.2.761.761,0,0,0,.2,1.036A4.57,4.57,0,0,0,175.448-15.624Zm13.44,14.2a.767.767,0,0,0,.7-.784.73.73,0,0,0-.784-.7c-3.976.2-6.748-.952-7.672-3.136-.98-2.464.588-5.908,4.088-9.016A.749.749,0,0,0,185.3-16.1a.783.783,0,0,0-1.064-.084c-4.06,3.612-5.74,7.588-4.48,10.7C180.936-2.66,184.24-1.2,188.888-1.428Z"
					transform="translate(191.873 22.048)"
				/>
			</svg>
		),
	}

	return logos[type]
}