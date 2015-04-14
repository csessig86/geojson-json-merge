// Loop through GeoJSON file
for (var num = 0; num < iowa_counties.features.length; num ++) {
	// Loop through JSON file
	for (var num_two = 0; num_two < census_data.length; num_two ++) {

		// Match files based on property
		if (iowa_counties.features[num].properties['NAMELSAD10'] === census_data[num_two]['name'] ) {

		// Fields we want to merge from JSON file into GeoJSON file
		var census_fields = ['population', 'unemployment', 'median_age', 'median_household_income', 'poverty_percent', 'white_percent', 'black_percent', 'asian_percent', 'indian_percent', 'other_percent', 'tworaces_percent', '12th_under_percent', 'high_school_ged_some_college_percent', 'college_percent', 'agriculture_percent', 'manufacturing_percent', 'finance_real_estate_rental_percent', 'education_health_care_social_assistance_percent', 'retail_percent', 'construction_percent', 'arts_entertainment_recreation_food_services_percent'];

			// Loop through fields
			for (var num_three = 0; num_three < census_fields.length; num_three ++) {
				// Add to GeoJSON file
				iowa_counties.features[num].properties[census_fields[num_three]] =  census_data[num_two][census_fields[num_three]]
			}
		}
	}
}

// Show on console
console.log(JSON.stringify(iowa_counties))