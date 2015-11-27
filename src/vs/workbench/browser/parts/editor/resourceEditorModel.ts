/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';

import {BaseTextEditorModel} from 'vs/workbench/browser/parts/editor/textEditorModel';
import URI from 'vs/base/common/uri';
import {URL} from 'vs/base/common/network';
import {IModeService} from 'vs/editor/common/services/modeService';
import {IModelService} from 'vs/editor/common/services/modelService';

/**
 * An editor model whith an in-memory, readonly content that is backed by an existing editor model.
 */
export class ResourceEditorModel extends BaseTextEditorModel {
	private resource: URI;

	constructor(
		resource: URI,
		@IModeService modeService: IModeService,
		@IModelService modelService: IModelService
	) {
		super(modelService, modeService, URL.fromUri(resource));
	}
}