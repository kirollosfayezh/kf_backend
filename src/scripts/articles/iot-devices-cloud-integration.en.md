---
title: Connecting IoT devices to the cloud: a practical guide
summary: Connectivity, MQTT or HTTP, AWS IoT Core or Azure IoT Hub versus your own backend, offline buffering, security and hosting: how to connect devices to the cloud.
tag: Business Systems
tags: IoT, IoT monitoring, MQTT, cloud integration, API integration, Egypt
order: 103
media: https://images.unsplash.com/photo-1677092419414-e974582c492c
alt: A hand holding a small Wi-Fi microcontroller board in front of a laptop showing code
caption: The board is the easy part; the work is getting its readings to the cloud reliably and securely.
stats: 6|links in the chain, from the device to a remote command; 2|common ways to send data: MQTT or HTTP; 500+|generators GenTrack monitors live
---

Integrating IoT devices with a cloud platform means building a chain: the device reads a sensor, sends the reading over a network (cellular, Wi-Fi, LoRaWAN or a cable), a cloud service receives and stores it, and dashboards, alerts and apps turn it into action, including commands sent back to the device. Most devices talk to the cloud over MQTT, with HTTP for simple or occasional data. The receiving end can be a managed service such as AWS IoT Core or Azure IoT Hub, or your own backend; the right choice depends on how many devices you have and what the data must connect to.

Whether you are connecting generators, tanks, cold rooms, scales or machines, these are the decisions to settle before you buy hardware.

## The chain from device to dashboard

Every connected-device system has the same six links, and a weak one breaks the whole chain.

1. **Device and firmware.** The sensor or controller, and the code that takes readings, stores them and reconnects after a failure.
2. **Connectivity.** How the data leaves the site: a SIM card, Wi-Fi, a long-range radio network or a cable.
3. **Ingestion.** The cloud endpoint that checks each device's identity and receives its messages.
4. **Storage.** A database of readings by device and time, plus the current state of every device.
5. **Dashboards, alerts and apps.** The screens people use, and the alerts that reach them when a reading crosses a limit or a device goes quiet.
6. **Remote commands.** The way back: changing a setting, restarting a unit or updating firmware without a site visit.

Our [GenTrack](/projects/gentrack) platform covers the full chain: custom hardware on each of more than 500 rental generators across Egypt, live location on a map, fuel anomaly detection, remote device management and a cloud ERP for the rental business. [Smart Balance](/projects/smart-balance) is a smaller example of the same idea: a Raspberry Pi scale that streams live weight to a mobile app.

## Connectivity: how the data leaves the device

The network decides where the device can be installed, how much data it can send and what it costs to run.

| Option | Range | Data volume | Power use | Running cost | Best for |
|---|---|---|---|---|---|
| Cellular 4G | Wherever there is mobile coverage | High | High | A data SIM per device | Moving assets, remote sites, frequent or large data |
| LTE-M / NB-IoT | Mobile coverage, often better indoors | Low | Very low | A SIM per device, where the operator offers it | Battery sensors sending small readings |
| Wi-Fi | Inside a building | High | Medium to high | Uses an existing network | Factories, shops, offices, cold rooms |
| LoRaWAN | Long range, through a gateway | Very low | Very low | Gateways plus a network server | Many small sensors across a farm or large site |
| Wired (Ethernet, RS-485) | A cable run | High | Mains powered | Installation only | Fixed machines and control panels |

LTE-M and NB-IoT are not available on every network, so confirm with the mobile operator before choosing hardware. Wi-Fi depends on someone else's router; when the password changes, devices go offline. And anything with a radio is regulated: in Egypt, ask the supplier to confirm the model is approved by the National Telecom Regulatory Authority (NTRA), and check the local rules in any other country.

## MQTT or HTTP, and when you need a gateway

**MQTT** is an open messaging protocol designed for devices. The device keeps one connection open to a broker and publishes small messages to topics such as `site-12/generator-4/fuel`. The same connection lets the cloud send commands back at once, and the protocol can confirm delivery of messages that must not be lost. It suits devices that report often or must receive commands.

**HTTP** means a normal web request for each reading or batch. It is simple and passes through almost any firewall, which suits devices that report a few times a day or upload files. Its weakness is the reverse direction: the cloud cannot reach the device until the device asks.

A **gateway** sits between devices and the internet. You need one when the devices cannot reach the internet themselves (LoRaWAN or Bluetooth sensors, machines that speak an industrial protocol over a cable), or when one connection for a room full of sensors is cheaper than a SIM in each. It collects the readings, buffers them and forwards them to the cloud.

## Managed IoT platform or your own backend?

Both work, and the trade-offs are real.

| | Managed platform (AWS IoT Core, Azure IoT Hub) | Custom backend |
|---|---|---|
| Device identity and certificates | Built in | Built with standard libraries |
| Very large fleets | Designed for it | Needs careful design |
| Pricing | Usage based; check the provider's current price list | Server and database costs you control |
| Lock-in | Device code and rules tied to one provider | Portable between hosts |
| Business logic (rentals, invoices, ERP) | Still has to be built on top | Built in the same system |

AWS IoT Core accepts MQTT, MQTT over WebSockets, HTTPS and LoRaWAN devices. Azure IoT Hub keeps a registry of every device and authenticates each one with a key or an X.509 certificate. Platforms also change: Google retired its Cloud IoT Core service in 2023, and the companies built on it had to move.

A managed platform makes most sense for very large fleets or teams already committed to one cloud. For tens or hundreds of devices whose data has to drive orders, rentals, invoices or maintenance, a custom backend with a standard MQTT broker is often simpler to run and keeps everything in one place. Our [API and backend service](/services/api-and-backend) builds either kind, and our article on [connecting the systems you already run](/blog/api-integration-connecting-business-systems) explains how the data then reaches your ERP or accounting.

## When the connection drops: buffering and timestamps

Connections will drop, in a basement, on a desert road or during an outage. A well-built device keeps working:

- **Buffer on the device.** Readings are stored locally and sent when the connection returns, oldest first.
- **Timestamp at the source.** Each reading carries the time it was measured, not the time it arrived. Otherwise a three-hour gap arrives as one burst that all looks like "now".
- **Keep the clock right.** The device syncs its clock from the network or GPS, and the server rejects times that are clearly wrong.
- **Show the gap.** The dashboard marks a device offline after a set silence, so nobody mistakes silence for "all fine".

## Device identity and security

A connected device is a door into your system. Treat each one as a user with its own login.

- **One identity per device.** Each device has its own certificate or key, so a stolen or cloned device is revoked alone, not the whole fleet.
- **Encrypted connections.** Every connection uses TLS, so readings and commands cannot be read or altered on the way.
- **Least privilege.** A device can publish only its own data and receive only its own commands.
- **Over-the-air (OTA) updates.** Firmware is updated remotely, signed so devices accept only genuine updates, and rolled out to a few devices first. A device you cannot update is one you will eventually visit by car.

## Data volume and retention

Do the arithmetic before choosing a database. One reading a minute is 1,440 readings a day per device; a hundred devices make 144,000 a day, about 52 million a year. A database built for time-series data handles that easily; one that is not will struggle.

Decide early how long to keep full detail. A common pattern is raw readings for a few months, then hourly or daily summaries kept for years.

## Where the data should be hosted

You choose the cloud provider and region, and the accounts should be in your name. Pick a region close to the devices and users, and check whether your sector or customers require data to stay in a particular country. If the data concerns people, such as driver locations, data protection law applies; see our guide to [data protection rules for apps in Egypt](/blog/egypt-data-protection-law-apps).

## Common questions

### Should I use MQTT or HTTP for my devices?

MQTT if devices report often or need to receive commands quickly; HTTP if they report a few times a day and never need to be reached from the cloud. Many systems use MQTT for readings and commands and HTTP for file uploads.

### Do I need AWS IoT Core or Azure IoT Hub?

No. They are good services, especially for very large fleets, but a custom backend with a standard MQTT broker also works well and is often easier to connect to your business systems. Decide on fleet size, your team's skills and how much you want to depend on one provider.

### Can we connect devices we already own?

Often, yes. Many machines and controllers already output data over a cable or a local network, and a gateway can read it and forward it to the cloud. The first step is finding out what each device can output.

### How do we start?

With a pilot of a few devices, to prove the readings, connectivity and alerts on site before you equip every unit. Our article on [how IoT reduces operating costs](/blog/iot-reduce-operating-costs) helps decide what to measure first, and our guide to [fleet tracking systems](/blog/fleet-tracking-system-egypt) shows the same chain applied to vehicles.

## Talk to us about your devices

KF Tech Solutions builds IoT systems across the whole chain: device setup and firmware, the cloud backend, web dashboards, mobile apps, alerts and remote device management. You own the source code and the cloud accounts, and we deploy to the provider and region you choose. See our [IoT solutions service](/services/iot-solutions). We work with businesses in Egypt and the Gulf.

If you have devices to connect, or a system that already loses data, [book a free call](/book) or [tell us about your project](/contact). We will suggest the connectivity, protocol and platform that fit your case.

## Sources

- [MQTT.org: the MQTT standard](https://mqtt.org/)
- [AWS IoT Developer Guide: What is AWS IoT?](https://docs.aws.amazon.com/iot/latest/developerguide/what-is-aws-iot.html)
- [Microsoft Learn: What is Azure IoT Hub?](https://learn.microsoft.com/en-us/azure/iot-hub/iot-concepts-and-iot-hub)
- [National Telecom Regulatory Authority (NTRA), Egypt](https://www.tra.gov.eg/)
- [KF Tech Solutions: GenTrack case study](/projects/gentrack)
