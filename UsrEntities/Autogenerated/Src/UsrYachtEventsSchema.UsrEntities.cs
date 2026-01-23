namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UsrYachtEventsSchema

	/// <exclude/>
	public class UsrYachtEventsSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UsrYachtEventsSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UsrYachtEventsSchema(UsrYachtEventsSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("0cb69fdf-a578-4221-bd96-e0eb088e658d");
			Name = "UsrYachtEvents";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("2d971e2d-ddf5-45fa-bd74-add48149d162");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,146,223,107,219,48,16,199,223,11,253,31,14,63,217,16,196,246,218,110,133,37,100,165,80,182,178,184,131,49,246,160,200,23,71,69,63,140,78,78,155,142,254,239,59,89,73,155,58,29,244,94,108,157,190,250,220,125,143,3,39,45,82,39,21,66,141,33,72,242,171,40,102,222,173,116,219,7,25,181,119,167,39,127,79,79,128,163,39,237,90,88,108,41,162,61,63,76,29,62,180,214,187,255,94,6,20,115,23,117,212,72,239,209,136,249,6,93,220,75,127,15,233,237,144,187,214,220,132,195,80,46,212,26,173,252,198,30,224,51,20,183,20,126,73,181,142,69,245,39,191,233,250,165,209,10,148,145,68,48,92,189,1,129,51,152,74,194,55,110,50,100,103,255,128,231,55,220,176,110,16,54,94,55,240,221,45,228,134,109,148,126,121,135,42,2,161,107,48,76,32,3,167,184,98,79,3,246,75,104,9,176,122,193,29,144,83,44,185,11,241,76,219,99,176,58,127,45,203,92,216,38,59,236,186,204,231,42,235,71,218,6,149,182,210,64,23,180,74,35,26,30,137,75,140,245,182,195,102,230,77,111,221,79,105,122,252,180,83,94,148,105,138,55,73,94,140,11,235,21,148,25,116,1,31,63,164,168,94,11,70,126,82,160,184,162,153,116,10,13,54,92,63,134,30,153,122,172,163,24,210,38,240,46,146,108,177,70,219,25,25,83,199,14,239,225,218,43,105,244,163,92,26,92,12,186,50,251,184,37,12,188,171,142,167,206,139,42,126,32,249,62,40,214,248,192,144,201,113,149,20,207,91,146,183,171,152,64,113,196,39,49,12,229,138,106,239,167,186,205,167,162,18,181,223,213,175,222,97,130,155,207,9,241,213,7,43,99,57,50,199,133,121,138,192,99,132,203,233,205,209,180,83,196,117,240,247,195,8,230,15,10,187,228,114,79,25,203,159,94,142,187,95,254,60,253,3,171,147,206,71,223,3,0,0 };
		}

		protected override void InitializeLocalizableStrings() {
			base.InitializeLocalizableStrings();
			SetLocalizableStringsDefInheritance();
			LocalizableStrings.Add(CreateValueIsTooBigLocalizableString());
		}

		protected virtual SchemaLocalizableString CreateValueIsTooBigLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("d491aab3-813f-3056-440f-b10eaffb2f46"),
				Name = "ValueIsTooBig",
				CreatedInPackageId = new Guid("2d971e2d-ddf5-45fa-bd74-add48149d162"),
				CreatedInSchemaUId = new Guid("0cb69fdf-a578-4221-bd96-e0eb088e658d"),
				ModifiedInSchemaUId = new Guid("0cb69fdf-a578-4221-bd96-e0eb088e658d")
			};
			return localizableString;
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("0cb69fdf-a578-4221-bd96-e0eb088e658d"));
		}

		#endregion

	}

	#endregion

}

