import { useState } from "react";
import {
  Home,
  Building,
  Calendar,
  MessageCircle,
  Settings,
  PlusCircle,
  Trash2,
  Pencil,
} from "lucide-react";
import GuestBookings from "../../../components/GuestBooking";

const menuItems = [
  { name: "Overview", icon: Home },
  { name: "My Properties", icon: Building },
  { name: "Bookings", icon: Calendar },
  { name: "Messages", icon: MessageCircle },
  { name: "Settings", icon: Settings },
];

export default function HostDashboard() {
  const [activeTab, setActiveTab] = useState("Overview");
  const [properties, setProperties] = useState([
    { id: 1, name: "Beach House", location: "Cape Coast" },
    { id: 2, name: "Mountain Cabin", location: "Aburi Hills" },
  ]);
  const [newProperty, setNewProperty] = useState({ name: "", location: "" });

  const handleAddProperty = () => {
    if (!newProperty.name || !newProperty.location) return;
    setProperties([
      ...properties,
      {
        id: Date.now(),
        name: newProperty.name,
        location: newProperty.location,
      },
    ]);
    setNewProperty({ name: "", location: "" });
  };

  const handleDeleteProperty = (id) => {
    setProperties(properties.filter((prop) => prop.id !== id));
  };

  const handleUpdateProperty = (id) => {
    const updatedName = prompt("Enter new name:");
    const updatedLocation = prompt("Enter new location:");
    if (updatedName && updatedLocation) {
      setProperties((prev) =>
        prev.map((prop) =>
          prop.id === id
            ? { ...prop, name: updatedName, location: updatedLocation }
            : prop
        )
      );
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <aside className="w-64 bg-white shadow-lg p-4">
        <h2 className="text-2xl font-bold mb-6">Host Dashboard</h2>
        <nav className="space-y-2">
          {menuItems.map(({ name, icon: Icon }) => (
            <button
              key={name}
              onClick={() => setActiveTab(name)}
              className={`flex items-center gap-2 p-2 rounded-md w-full text-left transition hover:bg-gray-100 ${
                activeTab === name ? "bg-gray-200 font-semibold" : ""
              }`}
            >
              <Icon className="w-5 h-5" />
              {name}
            </button>
          ))}
        </nav>
      </aside>

      <main className="flex-1 p-6">
        <h1 className="text-xl font-bold mb-4">{activeTab}</h1>
        <div className="bg-white rounded-lg shadow p-4">
          {activeTab === "Overview" && (
            <p>Welcome to your dashboard. Here's a summary of your activity.</p>
          )}

          {activeTab === "My Properties" && (
            <div>
              <div className="mb-4 flex flex-col md:flex-row gap-2">
                <input
                  type="text"
                  placeholder="Property name"
                  className="border px-3 py-1 rounded-md"
                  value={newProperty.name}
                  onChange={(e) =>
                    setNewProperty({ ...newProperty, name: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Location"
                  className="border px-3 py-1 rounded-md"
                  value={newProperty.location}
                  onChange={(e) =>
                    setNewProperty({ ...newProperty, location: e.target.value })
                  }
                />
                <button
                  onClick={handleAddProperty}
                  className="bg-[#00A8CC] text-white px-4 py-1 rounded-md hover:bg-blue-600 flex items-center gap-1"
                >
                  <PlusCircle className="w-4 h-4" />
                  Add
                </button>
              </div>

              <ul className="space-y-2">
                {properties.map((prop) => (
                  <li
                    key={prop.id}
                    className="border rounded-md p-3 flex justify-between items-center"
                  >
                    <div>
                      <p className="font-medium">{prop.name}</p>
                      <p className="text-sm text-gray-500">{prop.location}</p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleUpdateProperty(prop.id)}
                        className="text-blue-600 hover:underline"
                      >
                        <Pencil className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteProperty(prop.id)}
                        className="text-red-500 hover:underline"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === "Bookings" && (
            <div>
              <p>Upcoming and past bookings go here.</p>
              <GuestBookings />
            </div>
          )}
          {activeTab === "Messages" && <p>Your messages with guests.</p>}
          {activeTab === "Settings" && <p>Update your profile and settings here.</p>}
        </div>
      </main>
    </div>
  );
}
