import json
import datetime

# Function to generate unique ID
def generate_unique_id(relationship_type, business_type, occupation, count):
    relationship_codes = {
        "Refferral Partner": "RP",
        "Client": "CL",
        "Lead": "LD",
        "Contact": "CT"
    }
    business_codes = {
        "Public Agency": "PA",
        "Schools": "SCH",
        "Nonprofit": "N",
        "Government": "G",
        "Business": "B",
    }
    occupation_codes = {
        "C-Suite": "04",
        "High-MID": "03",
        "MID": "02",
        "LOW": "01",
        "Owner": "05"
    }
    year = datetime.datetime.now().year
    rel_code = relationship_codes.get(relationship_type, "XX")
    bus_code = business_codes.get(business_type, "XX")
    occ_code = occupation_codes.get(occupation, "XX")
    return f"{rel_code}{bus_code}{occ_code}{year}-{count:03d}"

# Load JSON data
with open("data.json", "r") as file:
    data = json.load(file)

# Process each profile and generate unique IDs
for idx, profile in enumerate(data["Profile"]):
    relationship_type = profile.get("RelationshipType", "")
    business_type = profile.get("BusinessType", "")
    occupation_level = profile.get("Occupation-level", "")
    profile["ID number"] = generate_unique_id(relationship_type, business_type, occupation_level, idx + 1)

# Save updated JSON back to the file
with open("data.json", "w") as file:
    json.dump(data, file, indent=4)

print("Unique IDs added to profiles.")
