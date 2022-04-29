/**
 * DEPRECATED EXPORTS
 *
 * To be removed from the public interface in the next major version.
 */

import { SvgCrossedOutCloud } from '../vendor/icons/SvgCrossedOutCloud';
import { SvgExclamation } from '../vendor/icons/SvgExclamation';
import { SvgFacebookMessenger } from '../vendor/icons/SvgFacebookMessenger';
import { SvgInfoRound } from '../vendor/icons/SvgInfoRound';
import { SvgMediaControlsPlay } from '../vendor/icons/SvgMediaControlsPlay';
import { SvgPayPalBrand } from '../vendor/icons/SvgPayPalBrand';
import type { Props as InternalPropsType } from './@types/Props';

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
