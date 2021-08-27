import { css } from '@emotion/react';
import { brandText } from '@guardian/src-foundations/palette';
import { Link } from '@guardian/src-link';
import { from } from '@guardian/src-foundations/mq';
import { visuallyHidden } from '@guardian/src-foundations/accessibility';
import { SvgGuardianLogo } from '@guardian/src-brand';

type LogoType = 'standard' | 'anniversary' | 'bestWebsite';

export type LogoProps = {
	/**
	 * The type of logo to return
	 */
	logoType?: LogoType;
};

const svgSize = css`
	svg {
		width: 146px;
		height: auto;
		${from.mobileMedium} {
			width: 195px;
		}
		${from.tablet} {
			width: 224px;
		}
		${from.desktop} {
			width: 295px;
		}
	}
`;

const svgColour = css`
	svg {
		fill: ${brandText.primary};
	}
`;

const StandardLogo = () => {
	return (
		<div css={[svgSize, svgColour]}>
			<SvgGuardianLogo />
		</div>
	);
};

const BestWebsiteLogo = () => {
	return (
		<div css={svgSize}>
			<svg
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 300 116"
			>
				<path
					d="M68.131 51.554l5.152-2.675V8.502h-3.896L59.87 21.091h-1.075l.607-14.032h41.262l.596 14.032h-1.129L90.806 8.502h-3.992v40.292l5.184 2.728v1.369H68.131v-1.337zM105.401 49.77V5.02l-4.003-1.592V2.59L115.866 0h1.522v21.175l.404-.34c3.205-2.79 7.804-4.585 12.402-4.585 6.335 0 9.134 3.567 9.134 10.211v23.31l3.386 1.835v1.36h-18.917v-1.349l3.395-1.847V26.376c0-3.65-1.596-5.116-4.598-5.116-2.002 0-3.726.627-5.004 1.646v26.917l3.332 1.837v1.295h-18.927V51.67l3.406-1.9zM153.732 36.025c.393 7.398 3.715 13.12 11.592 13.12 3.811 0 6.515-1.763 9.06-3.1V47.5c-1.97 2.686-6.962 6.454-13.914 6.454-12.21 0-18.449-6.762-18.449-18.48 0-11.453 6.824-18.585 17.853-18.585 10.369 0 15.755 5.169 15.755 18.776v.35h-21.897v.011zm-.203-1.698l10.742-.658c0-9.16-1.576-15.242-4.727-15.242-3.343 0-6.015 7.058-6.015 15.9zM0 70.808C0 51.33 12.934 44.399 27.338 44.399c6.11 0 11.88.977 15.105 2.314l.277 13.597h-1.373l-8.453-13.15c-1.447-.616-2.82-.86-5.354-.86-7.654 0-11.572 8.82-11.455 23.287.15 17.301 3.162 25.156 10.188 25.156 1.831 0 3.236-.276 4.216-.7V75.498l-4.642-2.653v-1.55h22.42v1.656L43.7 75.499v18.288c-3.79 1.476-10.188 2.877-16.937 2.877C10.39 96.664 0 89.096 0 70.808zM47.478 61.722v-1.125l15.075-2.653 1.65.138v29.614c0 3.566 1.724 4.67 4.609 4.67 1.863 0 3.545-.7 4.886-2.303V63.505l-4.13-1.784v-1.167L84.642 57.9l1.511.138v33.945l4.067 1.698v1.083L75.348 96.59l-1.511-.138v-4.458h-.416c-2.757 2.537-6.61 4.734-11.294 4.734-7.229 0-10.54-4.256-10.54-10.71V63.507l-4.109-1.784zM142.767 57.88l1.235.138v10.964h.34c1.608-8.035 5.163-11.038 9.496-11.038.692 0 1.448.063 1.863.275v11.22c-.692-.202-1.927-.276-3.098-.276-3.438 0-5.972.615-8.197 1.634v21.675l3.428 1.9v1.4h-19.545v-1.39l3.524-1.9V62.9l-4.131-1.23v-1.01l15.085-2.78z"
					fill="#fff"
				/>
				<path
					d="M180.622 58.804v-11.57l-4.131-1.443v-.924l15.213-2.791 1.447.201v49.686l4.205 1.518v1.284l-15.01 2.016-1.171-.137v-4.108h-.34c-2.204 2.197-5.238 4.182-9.986 4.182-8.197 0-14.18-6.241-14.18-19.01 0-13.46 6.952-20.072 17.491-20.072 3.013 0 5.291.552 6.462 1.168zm-.032 31.81V60.917c-.969-.616-1.661-1.38-4.163-1.295-4.066.138-6.578 6.273-6.578 17.184 0 9.819 1.809 15.306 7.228 15.126 1.522-.053 2.757-.595 3.513-1.316zM214.07 57.848l1.309.138V92.46l3.439 1.9v1.4h-19.545v-1.39l3.513-1.9v-29.04l-4.205-1.645v-1.147l15.489-2.791zm1.384-9.31c0 3.642-3.098 6.38-6.675 6.38-3.715 0-6.611-2.749-6.611-6.38 0-3.64 2.896-6.453 6.611-6.453 3.577 0 6.675 2.813 6.675 6.454zM261.453 92.472v-29.36l-4.131-1.443v-1.422l15.01-2.792 1.512.138v4.394h.415c3.236-2.887 8.059-4.734 12.807-4.734 6.536 0 9.432 3.09 9.432 9.957v25.198L300 94.36v1.4h-19.545v-1.39l3.513-1.9V67.9c0-3.778-1.65-5.285-4.748-5.285-2.001 0-3.641.51-5.163 1.634v28.213l3.438 1.9v1.4H257.94v-1.39l3.513-1.9zM239.768 74.024v-4.925c0-7.42-1.618-9.85-6.217-9.85-.543 0-1.011.063-1.554.137l-8.186 11.06h-1.15V60.269c3.513-1.083 7.91-2.357 13.733-2.357 10.006 0 15.829 2.77 15.829 11.124v24.01l3.588.944v.945c-1.416.88-4.258 1.687-7.377 1.687-4.94 0-7.303-1.613-8.389-4.32h-.341c-2.097 2.834-5.067 4.448-9.74 4.448-5.951 0-10.007-3.705-10.007-10.116 0-6.209 3.854-9.574 11.699-11.06l8.112-1.55zm0 16.59v-14.84l-2.501.203c-3.929.34-5.344 2.834-5.344 8.364 0 5.997 1.958 7.557 4.737 7.557 1.554-.01 2.438-.478 3.108-1.284zM110.202 74.024v-4.925c0-7.42-1.618-9.85-6.227-9.85-.543 0-1.012.063-1.555.137l-8.186 11.06h-1.15V60.269c3.513-1.083 7.91-2.357 13.733-2.357 10.007 0 15.83 2.77 15.83 11.124v24.01l3.587.944v.945c-1.416.88-4.258 1.687-7.377 1.687-4.94 0-7.303-1.613-8.389-4.32h-.34c-2.097 2.834-5.078 4.448-9.741 4.448-5.95 0-10.007-3.705-10.007-10.116 0-6.209 3.854-9.574 11.7-11.06l8.122-1.55zm0 16.59v-14.84l-2.501.203c-3.929.34-5.344 2.834-5.344 8.364 0 5.997 1.958 7.557 4.737 7.557 1.543-.01 2.427-.478 3.108-1.284z"
					fill="#fff"
				/>
				<path
					d="M248.423 51.638h-6.057v-.042l2.022-1.062c2.672-1.401 3.95-2.675 3.95-4.585 0-1.921-1.395-2.92-3.843-2.92-1.288 0-2.491.181-3.354.52l-.074 3.09h.255l2.289-3.312c1.256 0 1.81.934 1.81 2.58 0 1.623-.671 3.014-2.342 4.606l-2.172 2.059v1.306h7.314l.202-2.24zM253.65 54.048c2.534 0 4.642-1.847 4.642-5.552 0-3.683-2.065-5.477-4.546-5.477-2.512 0-4.716 1.805-4.716 5.562.011 3.599 2.129 5.467 4.62 5.467zm.043-.266c-1.086 0-1.48-1.698-1.48-5.307 0-3.481.415-5.18 1.469-5.18 1.086 0 1.437 1.656 1.437 5.329 0 3.47-.351 5.158-1.426 5.158zM263.678 54.048c2.533 0 4.641-1.847 4.641-5.552 0-3.683-2.065-5.477-4.545-5.477-2.513 0-4.716 1.805-4.716 5.562.01 3.599 2.129 5.467 4.62 5.467zm.042-.266c-1.085 0-1.479-1.698-1.479-5.307 0-3.481.415-5.18 1.469-5.18 1.086 0 1.437 1.656 1.437 5.329 0 3.47-.351 5.158-1.427 5.158z"
					fill="#FFE500"
				/>
				<path
					d="M223.79 45.047c.468-1.56.489-1.762-.362-1.963l-.288-.064c-.096-.138-.074-.35.096-.414.522.032 1.054.053 1.703.053h2.939c1.011 0 1.767 0 2.224-.053-.106.286-.489 1.613-.649 2.218-.064.138-.351.117-.394-.02.096-.871.139-1.285-.553-1.487-.362-.095-.852-.148-1.672-.148h-.873c-.447 0-.447.053-.596.562l-1.086 3.64c-.106.351-.074.415.256.415h1.086c1.501 0 1.799-.117 2.161-.818l.266-.52c.074-.095.383-.085.415.032-.106.297-.351.966-.532 1.582-.192.615-.352 1.252-.415 1.666-.096.117-.299.096-.416 0l.011-.637c.011-.552-.33-.732-1.629-.732h-1.171c-.351 0-.383.053-.5.467l-.692 2.399c-.447 1.55-.5 1.91.298 1.985l.617.053c.096.116.043.35-.063.414-.916-.032-1.469-.053-2.151-.053-.628 0-1.171.02-1.788.053-.128-.085-.128-.319-.011-.414l.49-.053c.756-.085.915-.287 1.416-1.985l1.863-6.178zM230.784 48.146c-.916 1.295-1.533 3.28-1.576 4.161-.032.584.192 1.062.65 1.062.351 0 .745-.149 1.245-.87.692-.988 1.437-3.185 1.469-4.066.011-.52-.074-1.093-.628-1.093-.33.01-.703.159-1.16.806zm2.874.796c-.043.913-.5 2.516-1.671 3.78-.98 1.06-1.831 1.145-2.257 1.145-1.012 0-1.672-.785-1.576-2.218.064-1.03.65-2.643 1.725-3.726.82-.827 1.533-1.082 2.182-1.082 1.107.01 1.661.891 1.597 2.101zM236.777 48.433l-.682 2.101h.075c.468-.934 1.245-2.26 1.661-2.813.362-.498.755-.87 1.149-.87.554 0 .628.563.628.817 0 .255-.138.733-.33.998-.191.255-.436.266-.5-.085-.074-.435-.17-.647-.33-.647-.138 0-.319.17-.554.499-.958 1.294-1.841 3.333-2.682 5.243-.064.138-.139.202-.266.202-.171 0-.628-.064-.522-.435.202-.67 1.203-3.61 1.629-5.244.042-.18.01-.35-.128-.35-.415 0-.841.467-1.118.87-.159.032-.266-.063-.255-.265.5-.902 1.107-1.603 1.863-1.603.788 0 .511 1.125.362 1.582zM272.631 49.027c.01 1.062-.011 2.282-.234 3.662h.064c.521-.817.979-1.847 1.33-2.866.33-.966.564-2.643.586-3.078.032-.477.266-.52.383-.52.106 0 .319.064.447.149.096.063.138.148.138.329.011.414-.415 2.568-1.831 5.073-.777 1.38-1.341 2.484-2.608 3.991-1.171 1.412-1.958 1.677-2.459 1.677-.5 0-.82-.35-.82-.764 0-.414.288-.711.629-.711.159 0 .319.096.425.265.043.085.192.297.437.297.202 0 .49-.137.873-.466.394-.35 1.086-1.402 1.384-2.495.223-.849.33-2.377.319-3.8-.032-1.847-.298-2.494-.596-2.494-.319 0-.586.562-.916 1.263-.17.053-.266-.064-.298-.212.33-1.115 1.022-2.144 1.799-2.144.788.01.916 1.677.948 2.844zM277.921 47.509c-.617.7-.979 1.465-1.171 1.942 1.044-.329 1.533-.647 2.119-1.231.49-.478.617-.987.617-1.136 0-.17-.074-.382-.362-.382-.223.01-.638.16-1.203.807zm2.502-.308c0 1.263-1.565 2.102-3.832 2.76-.107.286-.224.817-.224 1.486 0 .562.33.944.756.944.564 0 .958-.329 1.661-.965.138 0 .234.137.202.286-.958 1.253-1.863 1.518-2.523 1.518-.947 0-1.277-.934-1.277-1.751 0-1.051.628-3.079 2.352-4.48.82-.668 1.437-.796 1.895-.796.628-.01.99.563.99.998zM283.16 47.711c-1.012.945-1.97 3.132-1.97 4.31 0 .201.096.318.235.318.159 0 .628-.212 1.532-1.082 1.203-1.179 1.863-2.611 2.119-3.599-.107-.318-.383-.594-.788-.594-.383 0-.639.18-1.128.647zm2.746-1.9c.266-.138.682.032.777.255-.234.616-1.607 4.299-2.118 5.806-.096.287-.011.382.106.382.267 0 .724-.286 1.629-1.114.107 0 .224.085.224.212-.66.934-1.789 1.868-2.651 1.868-.362 0-.458-.318-.458-.446 0-.116.032-.265.16-.647l.522-1.497-.043-.02c-1.118 1.464-2.725 2.61-3.47 2.61-.448 0-.692-.467-.692-.934 0-.382.351-1.72 1.383-3.227.756-1.103 1.438-1.761 2.087-2.144.617-.371 1.011-.488 1.416-.488.17 0 .287.053.383.096a.95.95 0 01.319.35l.426-1.061zM289.536 47.775l-.681 2.102h.074c.469-.934 1.246-2.261 1.661-2.813.362-.5.756-.87 1.15-.87.553 0 .628.562.628.817 0 .254-.139.732-.33.997-.192.255-.447.266-.501-.085-.074-.435-.17-.647-.33-.647-.138 0-.319.17-.553.499-.958 1.295-1.842 3.333-2.683 5.243-.064.138-.138.202-.266.202-.17 0-.628-.064-.522-.435.203-.669 1.203-3.609 1.629-5.244.043-.18.011-.35-.128-.35-.415 0-.841.467-1.117.87-.16.032-.267-.063-.256-.265.5-.902 1.107-1.603 1.863-1.603.788 0 .5 1.136.362 1.582zM295.689 47.148c0 .265-.16.446-.288.52-.106.032-.202 0-.298-.138-.266-.287-.468-.53-.958-.53-.458 0-.649.413-.649.668 0 .35.074.7.532 1.518.394.7.628 1.114.596 1.847-.011.446-.234 1.061-.82 1.602-.404.383-.99.595-1.596.595-.597 0-.958-.499-.958-.881 0-.17.063-.35.234-.552a.303.303 0 01.426 0c.202.244.681.669 1.085.669.384 0 .756-.414.756-.945 0-.287-.191-.796-.585-1.465-.415-.7-.554-1.263-.554-1.55 0-.647.266-1.135.948-1.75.457-.415.958-.553 1.171-.553.596-.01.958.531.958.945z"
					fill="#fff"
				/>
				<path
					d="M73.848 100.316h2.246l2.949 5.095c.926 1.592 1.958 3.948 1.958 3.948h.054s-.16-2.473-.16-4.139v-4.904h1.82v11.707h-1.97l-3.235-5.668c-.916-1.592-1.96-3.991-1.96-3.991h-.063s.192 2.548.192 4.193v5.477h-1.82v-11.718h-.011zM84.6 108.053v-.796c0-2.855 1.66-4.172 3.864-4.172 2.555 0 3.62 1.317 3.62 4.044v1.083h-5.462c.053 1.953.884 2.367 2.555 2.367 1.14 0 1.874-.255 2.619-.616v1.412c-.586.372-1.533.817-3.013.817-2.853 0-4.183-1.454-4.183-4.139zm2.001-1.221h3.513c0-1.751-.586-2.292-1.682-2.292-.884 0-1.778.392-1.831 2.292zM92.87 103.245h2.034l.777 3.248c.34 1.401.713 4.097.713 4.097h.064s.373-2.664.767-4.097l.883-3.248h1.757l.883 3.248c.373 1.401.82 4.097.82 4.097h.064s.362-2.664.702-4.097l.767-3.248h1.778l-2.364 8.789h-1.99l-.99-3.577c-.373-1.316-.607-3.673-.607-3.673h-.064s-.213 2.357-.586 3.673l-.99 3.577h-2.033l-2.384-8.789zM105.752 111.609v-1.561c.735.297 1.352.531 2.577.531 1.171 0 1.639-.34 1.639-.977 0-.583-.16-.859-1.128-1.093l-.958-.223c-1.299-.307-2.119-.976-2.119-2.547 0-1.624 1.011-2.664 3.172-2.664 1.171 0 1.927.212 2.491.488v1.528c-.5-.212-1.33-.435-2.31-.435-.99 0-1.501.329-1.501.945 0 .584.277.828 1.044 1.008l.958.223c1.682.393 2.267 1.072 2.267 2.611 0 1.805-1.171 2.728-3.311 2.728-1.096 0-2.107-.191-2.821-.562zM116.728 103.245h2.033l.777 3.248c.341 1.401.713 4.097.713 4.097h.064s.373-2.664.767-4.097l.883-3.248h1.757l.883 3.248c.373 1.401.82 4.097.82 4.097h.064s.362-2.664.702-4.097l.767-3.248h1.778l-2.364 8.789h-1.99l-.99-3.577c-.373-1.316-.607-3.673-.607-3.673h-.064s-.213 2.357-.586 3.673l-.99 3.577h-2.033l-2.384-8.789zM129.641 108.053v-.796c0-2.855 1.66-4.172 3.864-4.172 2.555 0 3.619 1.317 3.619 4.044v1.083h-5.461c.053 1.953.884 2.367 2.555 2.367 1.139 0 1.874-.255 2.619-.616v1.412c-.586.372-1.533.817-3.013.817-2.853 0-4.183-1.454-4.183-4.139zm2.001-1.221h3.513c0-1.751-.586-2.292-1.682-2.292-.884 0-1.788.392-1.831 2.292zM138.71 111.525V99.541h1.959v4.469h.085c.618-.531 1.374-.924 2.491-.924 1.597 0 3.226.924 3.226 3.991v.711c0 3.004-1.48 4.437-4.333 4.437-1.245 0-2.618-.297-3.428-.7zm5.717-3.461v-.817c0-2.049-.649-2.547-2.118-2.547-.682 0-1.299.254-1.65.435v5.233c.33.159.745.339 1.575.339 1.15 0 2.193-.435 2.193-2.643zM147.632 111.609v-1.561c.734.297 1.352.531 2.576.531 1.171 0 1.639-.34 1.639-.977 0-.583-.159-.859-1.117-1.093l-.958-.223c-1.299-.307-2.119-.976-2.119-2.547 0-1.624 1.011-2.664 3.172-2.664 1.171 0 1.927.212 2.492.488v1.528c-.501-.212-1.331-.435-2.311-.435-.99 0-1.501.329-1.501.945 0 .584.277.828 1.044 1.008l.958.223c1.682.393 2.267 1.072 2.267 2.611 0 1.805-1.171 2.728-3.31 2.728-1.108 0-2.119-.191-2.832-.562zM155.253 99.816h2.023v1.868h-2.023v-1.868zm.032 3.428h1.959v8.789h-1.959v-8.789zM159.969 109.9v-5.116h-1.448v-1.539h1.448v-2.123h1.959v2.123h2.268v1.539h-2.268v4.808c0 .764.256.987 1.097.987.361 0 .979-.095 1.288-.223v1.327c-.362.223-1.076.457-1.927.457-1.469 0-2.417-.552-2.417-2.24zM165.313 108.053v-.796c0-2.855 1.661-4.172 3.865-4.172 2.555 0 3.619 1.317 3.619 4.044v1.083h-5.461c.053 1.953.884 2.367 2.555 2.367 1.139 0 1.874-.255 2.619-.616v1.412c-.586.372-1.533.817-3.013.817-2.853 0-4.184-1.454-4.184-4.139zm2.002-1.221h3.513c0-1.751-.586-2.292-1.682-2.292-.884 0-1.778.392-1.831 2.292zM178.035 108.053v-.743c0-2.76 1.725-4.225 4.035-4.225 2.491 0 3.971 1.433 3.971 4.14v.743c0 2.792-1.693 4.224-3.993 4.224-2.522 0-4.013-1.454-4.013-4.139zm5.972.074v-.891c0-2.198-.883-2.643-1.969-2.643-1.224 0-1.97.764-1.97 2.568v.913c0 2.155.895 2.611 2.023 2.611 1.214-.01 1.916-.722 1.916-2.558zM188.318 104.784h-1.437v-1.539h1.437v-1.083c0-1.921 1.171-2.76 2.821-2.76.798 0 1.405.149 1.693.308v1.369c-.224-.063-.682-.127-1.171-.127-.895 0-1.384.403-1.384 1.401v.913h2.097v1.539h-2.097v7.239h-1.959v-7.26zM198.496 109.9v-5.116h-1.448v-1.539h1.448v-2.123h1.958v2.123h2.268v1.539h-2.268v4.808c0 .764.256.987 1.097.987.362 0 .979-.095 1.288-.223v1.327c-.362.223-1.075.457-1.927.457-1.469 0-2.416-.552-2.416-2.24zM204.212 99.541h1.959v4.596h.085c.618-.605 1.65-1.051 2.704-1.051 1.629 0 2.449.711 2.449 2.42v6.528h-1.959v-6.04c0-.88-.277-1.231-1.405-1.231-.639 0-1.373.213-1.874.467v6.804h-1.959V99.541zM212.995 108.053v-.796c0-2.855 1.66-4.172 3.864-4.172 2.555 0 3.619 1.317 3.619 4.044v1.083h-5.461c.053 1.953.884 2.367 2.555 2.367 1.139 0 1.874-.255 2.619-.616v1.412c-.586.372-1.533.817-3.013.817-2.853 0-4.183-1.454-4.183-4.139zm2.001-1.221h3.513c0-1.751-.586-2.292-1.682-2.292-.894 0-1.788.392-1.831 2.292zM225.609 115.112v-1.38c.224.053.554.085.863.085.777 0 1.267-.308 1.575-1.136l.309-.828-3.066-8.608h2.065l.958 2.855c.618 1.815 1.012 4.235 1.012 4.235h.053s.436-2.42 1.022-4.235l.915-2.855h1.938l-3.375 9.744c-.575 1.656-1.405 2.399-2.98 2.399-.448 0-1.033-.117-1.289-.276zM233.86 108.053v-.796c0-2.855 1.661-4.172 3.864-4.172 2.555 0 3.62 1.317 3.62 4.044v1.083h-5.462c.054 1.953.884 2.367 2.555 2.367 1.139 0 1.874-.255 2.619-.616v1.412c-.585.372-1.533.817-3.012.817-2.843 0-4.184-1.454-4.184-4.139zm2.012-1.221h3.513c0-1.751-.586-2.292-1.682-2.292-.894 0-1.789.392-1.831 2.292zM242.408 109.666c0-1.624 1.012-2.388 2.725-2.6l1.959-.255v-.669c0-1.125-.458-1.411-1.905-1.411-.831 0-1.576.127-2.097.244v-1.412c.798-.329 1.745-.488 2.863-.488 1.97 0 3.098.775 3.098 2.632v6.316h-1.608l-.159-.881h-.096c-.405.573-1.054 1.04-2.15 1.04-1.565.01-2.63-.807-2.63-2.516zm4.674.605v-2.229l-1.512.149c-.83.085-1.203.531-1.203 1.38 0 .849.49 1.199 1.256 1.199.596.011 1.139-.202 1.459-.499zM251.01 103.245h1.873v1.199h.096c.437-.732 1.405-1.326 2.3-1.326.244 0 .457.032.521.085v1.783a4.748 4.748 0 00-.681-.064c-.767 0-1.608.255-2.15.605v6.517h-1.959v-8.799z"
					fill="#FFE500"
				/>
			</svg>
		</div>
	);
};

const AnniversaryLogo = () => {
	return (
		<div css={svgSize}>
			<svg
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 300 124"
			>
				<path
					d="M68.132 51.491l5.152-2.671V8.492h-3.896L59.87 21.065h-1.076l.607-14.015h41.262l.596 14.015h-1.128L90.806 8.492h-3.992v40.243L92 51.46v1.367H68.132v-1.336zM105.401 49.71V5.014l-4.003-1.59v-.837L115.866 0h1.522v21.15l.404-.34c3.205-2.788 7.804-4.58 12.402-4.58 6.335 0 9.134 3.563 9.134 10.2v23.28l3.386 1.834v1.357h-18.917v-1.346l3.395-1.845V26.344c0-3.646-1.596-5.11-4.598-5.11-2.002 0-3.726.626-5.004 1.644v26.885l3.332 1.834v1.294h-18.927v-1.283l3.406-1.898zM153.732 35.981c.393 7.39 3.715 13.104 11.592 13.104 3.812 0 6.515-1.76 9.06-3.096v1.453c-1.97 2.682-6.962 6.445-13.914 6.445-12.21 0-18.449-6.753-18.449-18.457 0-11.439 6.824-18.563 17.853-18.563 10.369 0 15.755 5.163 15.755 18.754v.35h-21.897v.01zm-.203-1.696l10.742-.657c0-9.149-1.576-15.224-4.727-15.224-3.343 0-6.015 7.05-6.015 15.881zM0 70.722c0-19.454 12.934-26.376 27.338-26.376 6.11 0 11.88.975 15.105 2.31l.277 13.581h-1.373l-8.453-13.135c-1.447-.615-2.82-.859-5.354-.859-7.654 0-11.572 8.81-11.455 23.26.15 17.28 3.162 25.125 10.188 25.125 1.831 0 3.236-.275 4.216-.7v-18.52l-4.642-2.65V71.21h22.42v1.654L43.7 75.407v18.266c-3.79 1.474-10.188 2.873-16.937 2.873C10.39 96.547 0 88.988 0 70.722zM47.478 61.648v-1.124l15.075-2.65 1.65.137V87.59c0 3.562 1.724 4.665 4.609 4.665 1.863 0 3.545-.7 4.886-2.3V63.428l-4.13-1.781V60.48l15.074-2.65 1.511.138v33.903l4.067 1.696v1.082l-14.872 1.823-1.511-.138v-4.452h-.416c-2.757 2.534-6.61 4.728-11.294 4.728-7.229 0-10.54-4.251-10.54-10.697V63.43l-4.109-1.781zM142.766 57.81l1.235.138v10.951h.341c1.607-8.025 5.163-11.025 9.496-11.025.692 0 1.447.063 1.863.275v11.206c-.692-.201-1.927-.276-3.098-.276-3.439 0-5.972.615-8.197 1.633V92.36l3.428 1.898v1.4h-19.546v-1.39l3.524-1.897V62.825l-4.13-1.23v-1.007l15.084-2.778z"
					fill="#fff"
				/>
				<path
					d="M180.622 58.732V47.177l-4.131-1.442v-.922l15.213-2.789 1.447.202V91.85l4.205 1.516v1.283l-15.01 2.014-1.171-.138v-4.102h-.34c-2.204 2.194-5.238 4.176-9.986 4.176-8.197 0-14.18-6.233-14.18-18.987 0-13.442 6.952-20.047 17.491-20.047 3.013 0 5.291.551 6.462 1.166zm-.032 31.773V60.842c-.969-.615-1.661-1.378-4.163-1.293-4.066.137-6.578 6.265-6.578 17.163 0 9.807 1.809 15.287 7.228 15.107 1.522-.053 2.757-.593 3.513-1.314zM214.07 57.778l1.31.138v34.433l3.438 1.898v1.399h-19.545v-1.389l3.513-1.897V63.354l-4.205-1.643v-1.145l15.489-2.788zm1.384-9.298c0 3.637-3.098 6.372-6.675 6.372-3.715 0-6.61-2.746-6.61-6.372 0-3.636 2.895-6.445 6.61-6.445 3.577 0 6.675 2.809 6.675 6.445zM261.453 92.36V63.036l-4.131-1.442v-1.42l15.01-2.788 1.512.137v4.39h.415c3.236-2.884 8.059-4.729 12.807-4.729 6.536 0 9.432 3.085 9.432 9.944v25.168l3.502 1.95v1.4h-19.545v-1.389l3.513-1.897V67.817c0-3.774-1.65-5.28-4.748-5.28-2.001 0-3.641.51-5.163 1.633V92.35l3.438 1.898v1.399H257.94v-1.389l3.513-1.897zM239.768 73.934v-4.92c0-7.41-1.618-9.837-6.217-9.837-.543 0-1.011.063-1.554.137l-8.186 11.047h-1.15V60.194c3.513-1.081 7.91-2.353 13.733-2.353 10.006 0 15.829 2.767 15.829 11.11v23.98l3.588.944v.944c-1.416.88-4.258 1.685-7.377 1.685-4.94 0-7.303-1.611-8.389-4.315h-.341c-2.097 2.831-5.067 4.442-9.74 4.442-5.951 0-10.007-3.7-10.007-10.103 0-6.202 3.854-9.562 11.699-11.046l8.112-1.548zm0 16.57V75.683l-2.501.201c-3.929.34-5.344 2.831-5.344 8.354 0 5.99 1.958 7.549 4.737 7.549 1.554-.011 2.438-.478 3.108-1.283zM110.202 73.934v-4.92c0-7.41-1.618-9.837-6.227-9.837-.543 0-1.012.063-1.555.137l-8.186 11.047h-1.15V60.194c3.513-1.081 7.91-2.353 13.733-2.353 10.007 0 15.83 2.767 15.83 11.11v23.98l3.587.944v.944c-1.416.88-4.258 1.685-7.377 1.685-4.94 0-7.303-1.611-8.389-4.315h-.34c-2.097 2.831-5.078 4.442-9.741 4.442-5.95 0-10.007-3.7-10.007-10.103 0-6.202 3.854-9.562 11.7-11.046l8.122-1.548zm0 16.57V75.683l-2.501.201c-3.929.34-5.344 2.831-5.344 8.354 0 5.99 1.958 7.549 4.737 7.549 1.543-.011 2.427-.478 3.108-1.283z"
					fill="#fff"
				/>
				<path
					d="M124.55 114.399h-10.537v-.078l3.515-1.854c4.65-2.457 6.875-4.673 6.875-8.005 0-3.358-2.431-5.085-6.685-5.085-2.252 0-4.34.31-5.836.902l-.128 5.394h.437l3.979-5.78c2.201 0 3.154 1.622 3.154 4.492 0 2.842-1.16 5.264-4.081 8.03l-3.773 3.589v2.277h12.736l.344-3.882zm9.177 3.744c-1.882 0-2.586-2.971-2.586-9.266 0-6.064.721-9.036 2.561-9.036 1.882 0 2.508 2.894 2.508 9.293-.008 6.072-.626 9.009-2.483 9.009zm-.077.464c4.417 0 8.087-3.229 8.087-9.679 0-6.425-3.592-9.55-7.907-9.55-4.365 0-8.215 3.151-8.215 9.704 0 6.278 3.695 9.525 8.035 9.525zm17.532-.387c-1.882 0-2.587-2.971-2.587-9.267 0-6.063.722-9.035 2.56-9.035 1.882 0 2.51 2.895 2.51 9.294-.008 6.063-.628 9.008-2.483 9.008zm-.078.464c4.418 0 8.086-3.229 8.086-9.679 0-6.424-3.592-9.55-7.905-9.55-4.367 0-8.216 3.152-8.216 9.705 0 6.27 3.695 9.524 8.035 9.524z"
					fill="#FFE500"
				/>
				<path
					d="M164.089 123.322l-1.385-2.679v-.37h4.977l-5.793-15.184-1.125-.567v-.42h7.227v.42l-1.453.644 3.12 9.052 2.698-8.631-1.83-1.065v-.42h3.73v.42l-1.409.989-4.246 13.363c-.756 2.362-2.191 3.924-4.511 4.448zm13.586-12.9c.164 3.35 1.169 5.403 4.461 5.403 1.082 0 1.993-.146 2.861-.55v.395c-.73 1.168-2.509 2.379-5.07 2.379-4.34 0-6.566-2.774-6.566-7.214 0-4.337 2.44-7.042 6.376-7.042 3.962 0 5.629 2.232 5.629 6.277v.344h-7.691v.008zm0-.498l3.635-.171c0-4.269-.541-5.48-1.667-5.48-1.221 0-1.968 1.736-1.968 5.651zm14.944-.222v-1.813c0-2.757-.567-3.641-1.994-3.641-.163 0-.301.025-.472.051l-3.162 4.535h-.404l.094-4.218c1.221-.395 2.742-.841 4.761-.841 3.471 0 5.491 1.014 5.491 4.088v8.829l1.247.343v.344c-.491.327-1.478.619-2.562.619-1.71 0-2.535-.593-2.904-1.589h-.121c-.73 1.039-1.762 1.64-3.376 1.64-2.063 0-3.473-1.366-3.473-3.718 0-2.285 1.34-3.522 4.056-4.072l2.819-.557zm0 6.105v-5.453l-.867.077c-1.358.121-1.857 1.039-1.857 3.075 0 2.208.678 2.774 1.641 2.774.542 0 .842-.181 1.083-.473zm11.576-11.954l.421.051v3.864h.12c.653-2.954 1.736-4.07 3.188-4.07.232 0 .49.025.636.103v4.088c-.232-.078-.653-.103-1.057-.103-1.168 0-2.036.12-2.792.447v8.656l1.735.37v.421h-7.364v-.421l1.34-.37v-11.234l-1.409-.592v-.42l5.182-.79zm15.245 9.67c0 2.8-1.857 4.491-5.276 4.491-1.548 0-3.145-.197-4.384-.695l-.137-4.019h.395l3.351 4.14c.233.076.491.119.705.119 1.436 0 2.089-.816 2.089-2.086 0-1.117-.568-1.538-2.037-2.285l-.773-.369c-2.346-1.168-3.704-2.379-3.704-4.664 0-2.774 1.83-4.415 4.975-4.415 1.29 0 2.699.121 3.773.448l.12 3.744h-.395l-2.561-3.625a2.443 2.443 0 00-.825-.146c-1.264 0-1.831.774-1.831 1.881 0 1.212.542 1.616 2.115 2.38l.73.343c2.398 1.211 3.67 2.276 3.67 4.758zm-146.719 4.114l1.573-.343v-16.319l-1.546-.369v-.421h13.654l.12 5.806h-.395l-3.05-5.334h-3.824v8.409h1.873l2.13-3.298h.396v7.119h-.395l-2.132-3.323h-1.873v7.763l1.83.327v.421H72.73v-.438h-.009zm12.883-6.416c0-4.363 2.629-7.068 6.565-7.068 3.936 0 6.616 2.705 6.616 7.094 0 4.415-2.628 7.189-6.59 7.189-3.92 0-6.59-2.8-6.59-7.215zm4.622.026c0 5.36.68 6.742 1.995 6.742 1.288 0 1.95-1.417 1.95-6.768 0-5.333-.636-6.621-1.967-6.621-1.298 0-1.978 1.314-1.978 6.647zm13.836-7.016l.421.051v3.865h.12c.653-2.955 1.737-4.062 3.188-4.062.233 0 .49.025.637.103v4.088c-.233-.078-.654-.104-1.058-.104-1.168 0-2.044.121-2.792.447v8.657l1.735.37v.42h-7.364v-.42l1.34-.37v-11.241l-1.41-.594v-.42l5.183-.79z"
					fill="#fff"
				/>
			</svg>
		</div>
	);
};

const DecideLogo = ({ logoType }: { logoType: LogoType }) => {
	switch (logoType) {
		case 'anniversary':
			return <AnniversaryLogo />;
		case 'standard':
			return <StandardLogo />;
		case 'bestWebsite':
			return <BestWebsiteLogo />;
	}
};

/**
 * [Storybook](https://guardian.github.io/source/?path=/docs/editorial-src-ed-logo-logo--storybook) •
 * [Design System](https://theguardian.design) •
 * [GitHub](https://github.com/guardian/source/tree/main/src/editorial/web/components/logo) •
 * [NPM](https://www.npmjs.com/package/@guardian/src-ed-logo)
 */
export const Logo = ({ logoType = 'standard' }: LogoProps) => (
	<Link
		href="https://www.theguardian.com"
		title="The Guardian Homepage"
		subdued={true}
		cssOverrides={css`
			/* Adding block display here so that the focus halo correctly covers the content */
			display: block;
			color: ${brandText.primary};
			:hover {
				color: ${brandText.primary};
			}
		`}
	>
		<span
			css={css`
				${visuallyHidden};
			`}
		>
			The Guardian - Back to home
		</span>
		<DecideLogo logoType={logoType} />
	</Link>
);
