import Gtk from "gi://Gtk";
import { gettext as _ } from "gettext";

export default function About({ application, version }) {
  const dialog = new Gtk.AboutDialog({
    application,
    authors: ["Sonny Piers https://sonny.re", "Aral Balkan https://ar.al/"],
    artists: ["Tobias Bernard <tbernard@gnome.org>"],
    comments: _("Commit message editor"),
    copyright: "© 2020-2022 Sonny Piers\n© 2018-2020 Aral Balkan",
    license_type: Gtk.License.GPL_3_0,
    version,
    website: "https://github.com/sonnyp/Commit",
    transient_for: application.get_active_window(),
    modal: true,
    logo_icon_name: "re.sonny.Commit",
    // TRANSLATORS: eg. 'Translator Name <your.email@domain.com>' or 'Translator Name https://website.example'
    translator_credits: _("translator-credits"),
  });
  dialog.add_credit_section("Contributors", [
    // Add yourself as
    // "John Doe",
    // or
    // "John Doe <john@example.com>",
    // or
    // "John Doe https://john.com",
    "Sergey Bugaev https://mastodon.technology/@bugaevc",
    "Christopher Davis https://social.libre.fi/brainblasted",
  ]);
  dialog.present();

  return { dialog };
}
