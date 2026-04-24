map = folium.Map(location =[38.900115611746834, -77.02168612022783],  
    tiles = None, 
    zoom_start=12.5)


def urban_turf(FG, VAL):
    df_grp = df_addresses[df_addresses['Status_comb'] == VAL]
        
    for row in df_grp.itertuples():
        popup = folium.Popup("This is a wide popup", max_width=500)

        
        popup_content = f"""
            <!DOCTYPE html>
            <html>
            <body>
                <h4 style="font-family: Arial, Helvetica, sans-serif; font-size: 12px;">{row.Website_url}</h4>
                <h4 style="font-family: Arial, Helvetica, sans-serif; font-size: 12px;">{row.units_str}</h4>
            </body>
            </html>
            """
        popup_content = popup_content.replace(". ", ". <br>")
      
        marker = folium.Circle(
            location=[row.Latitude, row.Longitude], 
            fill_color=row.Marker_color,
            radius = row.No_units*0.35,
            weight=.05,
            popup = folium.Popup(popup_content, max_width=800)
        ).add_to(FG)
        FG.add_to(map) 

    
urban_turf(delivered, "Delivered")
urban_turf(planned, "Planned")
urban_turf(under_construction, "Under Construction")

GroupedLayerControl(
    groups={'Urban Turf': [planned, delivered, under_construction]},
    collapsed=False,
    exclusive_groups=False,
).add_to(map)

folium.TileLayer('OpenStreetMap').add_to(map)
folium.TileLayer('CartoDB positron').add_to(map)


map
