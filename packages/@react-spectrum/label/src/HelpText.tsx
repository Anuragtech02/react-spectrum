/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import {classNames, useDOMRef, useStyleProps} from '@react-spectrum/utils';
import {DOMProps, DOMRef, SpectrumHelpTextProps, StyleProps} from '@react-types/shared';
import {filterDOMProps} from '@react-aria/utils';
import React, {HTMLAttributes} from 'react';

interface HelpTextProps extends SpectrumHelpTextProps {
  /** Props for the help text description element. */
  descriptionProps: HTMLAttributes<HTMLElement>,
  /** Props for the help text error message element. */
  errorMessageProps: HTMLAttributes<HTMLElement>
}

function HelpText(props: HelpTextProps, ref: DOMRef<HTMLDivElement>) {
  let {
    description,
    errorMessage,
    validationState,
    isDisabled,
    showIcon,
    descriptionProps,
    errorMessageProps
  } = props;
  let {styleProps} = useStyleProps(props);
  let domRef = useDOMRef(ref);

  if (!description || !errorMessage) {
    return null;
  }

  return (
    <div
      {...filterDOMProps(props)}
      {...styleProps}
      ref={domRef}
      className={styleProps.className}>
      {validationState === 'invalid' ? (
        <div {...errorMessageProps}>
          {showIcon && <span>/!\ - </span>}
          Error message: {errorMessage} {isDisabled && '— disabled'}
        </div>
      ) : (
        <div {...descriptionProps}>
          Description: {description} {isDisabled && '— disabled'}
        </div>
      )}
    </div>
  );
}

/**
 * TODO: Add description of component here.
 */
const _HelpText = React.forwardRef(HelpText);
export {_HelpText as HelpText};