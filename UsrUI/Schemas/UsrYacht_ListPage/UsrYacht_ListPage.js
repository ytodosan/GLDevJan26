define("UsrYacht_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "MenuItem_ImportFromExcel",
				"values": {
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrYacht"
						}
					}
				}
			},
			{
				"operation": "merge",
				"name": "FolderTree",
				"values": {
					"rootSchemaName": "UsrYacht"
				}
			},
			{
				"operation": "merge",
				"name": "DataTable",
				"values": {
					"columns": [
						{
							"id": "f252f581-0ccf-44ac-b7c9-c00df2ad9919",
							"code": "PDS_UsrName",
							"caption": "#ResourceString(PDS_UsrName)#",
							"dataValueType": 1,
							"width": 170
						},
						{
							"id": "54139a58-9459-5fa3-020a-491d207165f8",
							"code": "PDS_UsrStatus",
							"caption": "#ResourceString(PDS_UsrStatus)#",
							"dataValueType": 10
						},
						{
							"id": "1934ee6d-a355-637a-401e-965f07cbf004",
							"code": "PDS_UsrCaptain",
							"caption": "#ResourceString(PDS_UsrCaptain)#",
							"dataValueType": 10
						},
						{
							"id": "d661b25b-42bd-398b-dfcf-400d387ae80a",
							"code": "PDS_UsrLength",
							"caption": "#ResourceString(PDS_UsrLength)#",
							"dataValueType": 4
						},
						{
							"id": "1b636a43-4730-dbd4-0051-f404d7ae53d1",
							"code": "PDS_UsrYachtRentalsUsrParentYacht_UsrTotalPrice_ju0meqi",
							"caption": "#ResourceString(PDS_UsrYachtRentalsUsrParentYacht_UsrTotalPrice_ju0meqi)#",
							"dataValueType": 32
						}
					],
					"features": {
						"columns": {
							"adding": false
						},
						"editable": {
							"enable": false,
							"itemsCreation": false,
							"floatingEditPanel": false
						}
					},
					"visible": true
				}
			},
			{
				"operation": "merge",
				"name": "Dashboards",
				"values": {
					"_designOptions": {
						"entitySchemaName": "UsrYacht",
						"dependencies": [
							{
								"attributePath": "Id",
								"relationPath": "PDS.Id"
							}
						],
						"filters": []
					}
				}
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"viewModelConfig",
					"attributes"
				],
				"values": {
					"PDS_UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrStatus": {
						"modelConfig": {
							"path": "PDS.UsrStatus"
						}
					},
					"PDS_UsrCaptain": {
						"modelConfig": {
							"path": "PDS.UsrCaptain"
						}
					},
					"PDS_UsrLength": {
						"modelConfig": {
							"path": "PDS.UsrLength"
						}
					},
					"PDS_UsrYachtRentalsUsrParentYacht_UsrTotalPrice_ju0meqi": {
						"modelConfig": {
							"path": "PDS.UsrYachtRentalsUsrParentYacht_UsrTotalPrice_ju0meqi"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"dataSources",
					"PDS",
					"config"
				],
				"values": {
					"entitySchemaName": "UsrYacht",
					"attributes": {
						"UsrName": {
							"path": "UsrName"
						},
						"UsrStatus": {
							"path": "UsrStatus"
						},
						"UsrCaptain": {
							"path": "UsrCaptain"
						},
						"UsrLength": {
							"path": "UsrLength"
						},
						"UsrYachtRentalsUsrParentYacht_UsrTotalPrice_ju0meqi": {
							"type": "Aggregation",
							"path": "[UsrYachtRentals:UsrParentYacht].UsrTotalPrice",
							"aggregationConfig": {
								"aggregationFunction": "Sum"
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});