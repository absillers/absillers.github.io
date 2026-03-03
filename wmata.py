
filename = "C:/Users/asillers/OneDrive - The American Council of Trustees Alumni/Metro_Stations_(Regional).csv"
wmata_addresses = pd.read_csv(filename)
metro_stations = list(wmata_addresses['NAME'])

metro_stations =  ["Woodley Park-ZooAdams Morgan" if x == "Woodley Park-Zoo/Adams Morgan" else x for x in metro_stations]
metro_stations =  ["U StreetAfrican-Amer Civil War MemorialCardozo" if x == "U Street/African-Amer Civil War Memorial/Cardozo" else x for x in metro_stations]
metro_stations =  ["ViennaFairfax-GMU" if x == "Vienna/Fairfax-GMU" else x for x in metro_stations]


base_path = "C:/Users/asillers/OneDrive - The American Council of Trustees Alumni/"

a = base_path + metro_stations[0] + ".xlsx"

wmata = pd.read_excel(a, header=1)
wmata.iloc[0,0] = metro_stations[0]

#turn into function?
for i in range(1, len(metro_stations)):
    a = base_path + metro_stations[i] + ".xlsx"
    add  = pd.read_excel(a, header=1)
    wmata = pd.concat([wmata, add], ignore_index=True)
    wmata.iloc[i,0] = metro_stations[i]

weekday_cols = []
weekend_cols = []

numcol = wmata.shape[1]

for i in range(1, numcol):
    if i % 7 in (1,2,3,4,5):
        weekday_cols.append(i)
    else:
        weekend_cols.append(i)

        
wmata['weekend_mean'] = wmata.iloc[:, weekend_cols].mean(axis=1)
wmata['weekday_mean'] = wmata.iloc[:, weekday_cols].mean(axis=1)

filename = "C:/Users/asillers/OneDrive - The American Council of Trustees Alumni/Metro_Stations_(Regional).csv"
wmata_addresses = pd.read_csv(filename)

def get_lat_long(address):
    geolocator = Nominatim(user_agent="my_geocoder_app")
    time.sleep(1.1)
    location = geolocator.geocode(address)

    if location:
        return location.latitude, location.longitude
    else:
        return None
    
wmata_addresses['Latitude'] = None   
wmata_addresses['Longitude'] = None   


for i in range(0, len(wmata_addresses)):
    try:
        c = wmata_addresses['ADDRESS'][i]
        a = get_lat_long(c)
        wmata_addresses['Latitude'][i] =  a[0]
        wmata_addresses['Longitude'][i] =  a[1]

    except Exception:
        pass

wmata_addresses['color_line'] = [x.split(",")[0] for x in wmata_addresses['LINE']]
wmata["weekend_mean_rounded"] = [round(x) for x in wmata['weekend_mean']]
wmata["weekday_mean_rounded"] = [round(x) for x in wmata['weekday_mean']]

wmata = wmata.rename(columns={'Mode': 'NAME'})
wmata_addresses = pd.merge(wmata_addresses, wmata[['NAME','weekend_mean', 'weekday_mean']], on='NAME', how='inner')
wmata_addresses = wmata_addresses.dropna(subset=['Latitude']) 
wmata_addresses = wmata_addresses.dropna(subset=['Longitude']) 

wmata_addresses_long = pd.melt(wmata_addresses, 
                              id_vars = wmata_addresses.loc[:, 'X':'Longitude'],
                              var_name = "weekend_weekday",
                               value_name = 'ridership')

