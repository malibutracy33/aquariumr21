import MailtoLink from "@/components/mailto";
import React from "react";

export default function Kontakt() {
  return (
    <div>
      <div>
        {/* info */}
        <h1>INFO</h1>
        <p>Aquarium e.V.</p>
        <p>Riebeckstraße 21</p>
        <p>Öffnungszeiten: siehe Programm</p>
        <MailtoLink word="info@aquarium.is" />
      </div>
      <div> {/* anfahrt */} googlemaps oder bild </div>
      <div>
        {" "}
        {/* anfragen UMSCHREIBEN */}
        <p>
          Das ZiMMT unterstützt parallel zum eigenen Programm externe
          Partner:innen in der Konzeption und Durchführung von
          (Forschungs-)Projekten und Veranstaltungen.
        </p>
        <p>
          Du möchtest mit oder bei uns ein Projekt realisieren? Bitte schicke
          uns eine Kurzbeschreibung Deines Projektes an:
        </p>
        <MailtoLink word="info@aquarium.is" />
      </div>
    </div>
  );
}
