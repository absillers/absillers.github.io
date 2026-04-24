map = folium.Map(location =[38.900115611746834, -77.02168612022783],  
    tiles = None, 
    zoom_start=11)

wmata_weekends = folium.FeatureGroup(name='Weekend Ridership')
wmata_weekdays = folium.FeatureGroup(name='Weekday Ridership')

def wmata_group(FG, mean):
    col_index = wmata_addresses.columns.get_loc(mean)

    for row in wmata_addresses.itertuples():
        popup_content = f"""
            <!DOCTYPE html>
            <html>
            <body>
                <h4 style="font-family: Arial, Helvetica, sans-serif; font-size: 12px;">{row.NAME}</h4>
                <h4 style="font-family: Arial, Helvetica, sans-serif; font-size: 12px;">{row[col_index]}</h4>
            </body>
            </html>
            """
        popup_content = popup_content.replace(". ", ". <br>")
        iframe = folium.IFrame(popup_content,
                        width=180,
                        height=70)
        marker = folium.Circle(
            location=[row.Latitude, row.Longitude], 
            popup = folium.Popup(iframe, max_width=100),

            fill_color=row.color_line,
            radius = row[col_index]*.1,
            weight=.05,
            fill_opacity=.6).add_to(FG)
        FG.add_to(map) 

wmata_group(wmata_weekends, 'weekend_mean_rounded')
wmata_group(wmata_weekdays, 'weekday_mean_rounded')

GroupedLayerControl(
    groups={'WMATA': [wmata_weekends, wmata_weekdays]},
    collapsed=False,
    exclusive_groups=False,
).add_to(map)


folium.TileLayer('OpenStreetMap').add_to(map)
folium.TileLayer('CartoDB positron').add_to(map)

folium.LayerControl(collapsed=False).add_to(map)

