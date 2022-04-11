/**
 * DEPRECATED EXPORTS
 *
 * To be removed from the public interface in the next major version.
 */

import type { Props as InternalPropsType } from './@types/Props';
import { SvgCrossedOutCloud } from './icons/components/SvgCrossedOutCloud';
import { SvgExclamation } from './icons/components/SvgExclamation';
import { SvgFacebookMessenger } from './icons/components/SvgFacebookMessenger';
import { SvgInfoRound } from './icons/components/SvgInfoRound';
import { SvgMediaControlsPlay } from './icons/components/SvgMediaControlsPlay';
import { SvgPayPalBrand } from './icons/components/SvgPayPalBrand';

/**
 * @deprecated This is for internal use only.
 * It was previously exported so the v3 `src-*` modules could use it
 * but will be removed in the next major version.
 */
export type Props = InternalPropsType;

/** @deprecated Use `SvgCrossedOutCloud` instead. */
export const SvgOfflineCloud = SvgCrossedOutCloud;

/** @deprecated Use `SvgExclamation` instead. */
export const SvgAlert = SvgExclamation;

/** @deprecated Use `SvgFacebookMessenger` instead. */
export const SvgMessenger = SvgFacebookMessenger;

/** @deprecated Use `SvgInfoRound` instead. */
export const SvgInfo = SvgInfoRound;

/** @deprecated Use `SvgMediaControlsPlay` instead. */
export const SvgPlay = SvgMediaControlsPlay;

/** @deprecated Use `SvgPayPalBrand` instead. */
export const SvgPayPal = SvgPayPalBrand;
